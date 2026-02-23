from sentence_transformers import SentenceTransformer
from sqlalchemy.orm import Session
from .models import ResumeChunk
import numpy as np

model = None

def get_model():
    global model
    if model is None:
        model = SentenceTransformer("all-MiniLM-L6-v2")
    return model

def embed_text(text: str):
    embedding = get_model().encode(text)
    return embedding.tolist()

def get_similar_chunks(db: Session, query: str, k: int = 3):
    query_embedding = embed_text(query)
    results = db.query(ResumeChunk).order_by(  
        ResumeChunk.embedding.l2_distance(query_embedding)  
        ).limit(k).all()  

    return results  


# from sentence_transformers import SentenceTransformer
# from sqlalchemy.orm import Session
# from .models import ResumeChunk
# from pgvector.sqlalchemy import Vector
# import numpy as np

# # Load embedding model once
# model = SentenceTransformer("all-MiniLM-L6-v2")

# def embed_text(text: str):
#     embedding = model.encode(text)
#     return embedding.tolist()

# def get_similar_chunks(db: Session, query: str, k: int = 3):
#     query_embedding = embed_text(query)

#     results = db.query(ResumeChunk).order_by(
#         ResumeChunk.embedding.l2_distance(query_embedding)
#     ).limit(k).all()

#     return results