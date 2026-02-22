# Waseem Khan – AI Portfolio

A portfolio website featuring an AI-powered resume chatbot.

This project demonstrates frontend engineering, backend system design, retrieval-augmented generation (RAG), and intent-based conversational routing.

---

## Tech Stack

Frontend:
- React (Vite)
- TypeScript
- TailwindCSS
- Framer Motion

Backend:
- Python (FastAPI)
- PostgreSQL with pgvector
- OpenRouter (LLM integration)

---

## AI Chat Architecture

The chatbot supports:

- Resume-based question answering (RAG)
- Intent classification (greeting, capability, gratitude, resume)
- Vector similarity search using embeddings
- Strict context-bound responses (no hallucination)

Flow:
User Query → Intent Classification → 
If Resume → Retrieve Similar Chunks → Inject Context → LLM Response

---

## 📂 Project Structure

```
waseem-portfolio/
├── frontend/    # React + TypeScript UI
├── backend/     # FastAPI + Vector Search + LLM Routing
```

---

## ⚙️ Local Setup

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Make sure PostgreSQL (Docker) is running.

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

##  Author

Waseem Khan  
Full-Stack Developer • AI Engineer

Waseem Khan  
Full-Stack Developer • AI Engineer
