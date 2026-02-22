from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .database import engine, get_db
from .models import Base
from .rag import get_similar_chunks
import os
import uvicorn
from dotenv import load_dotenv
from openai import OpenAI
from .schemas import ChatRequest
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()
Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url=os.getenv("OPENROUTER_BASE_URL"),
)

@app.get("/")
def read_root():
    return {"message": "Backend is running"}


def classify_intent(message: str) -> str:
    message = message.lower().strip()

    greetings = ["hi", "hello", "hey"]
    capabilities = [
        "what can you do",
        "how can you help",
        "can you help",
        "who are you"
    ]
    gratitude = ["thanks", "thank you"]

    for word in greetings:
        if message == word or message.startswith(word + " "):
            return "greeting"

    for phrase in capabilities:
        if phrase in message:
            return "capability"

    for word in gratitude:
        if word in message:
            return "gratitude"

    return "resume"

@app.post("/chat")
def chat(request: ChatRequest, db: Session = Depends(get_db)):
    query = request.message

    intent = classify_intent(query)

    if intent == "greeting":
        return {
            "response": "Hi! I'm Waseem's AI assistant. Feel free to ask about his skills, projects, or experience."
        }

    if intent == "capability":
        return {
            "response": (
                "I can answer questions about Waseem's technical skills, "
                "projects, experience, and more based on his resume."
            )
        }

    if intent == "gratitude":
        return {
            "response": "You're welcome! Let me know if you'd like to know anything about Waseem."
        }

    # Resume flow
    chunks = get_similar_chunks(db, query, k=5)
    context = "\n\n".join([chunk.content for chunk in chunks])

    prompt = f"""
You are an AI assistant that answers strictly based on the provided resume context.

If the answer is not present in the context, respond with:
"The requested information is not available in Waseem's resume."

Resume Context:
{context}

User Question:
{query}

Answer:
"""

    response = client.chat.completions.create(
        model="mistralai/mistral-7b-instruct",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.2,
    )

    return {
        "response": response.choices[0].message.content
    }

#Testing for deployment
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app.main:app", host="0.0.0.0", port=port)