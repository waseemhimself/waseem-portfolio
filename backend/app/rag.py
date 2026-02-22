from sqlalchemy.orm import Session
from .models import ResumeChunk
from pgvector.sqlalchemy import Vector
import numpy as np

from sentence_transformers import SentenceTransformer

# Lazy-loaded model
_model = None

def get_model():
    global _model
    if _model is None:
        _model = SentenceTransformer("all-MiniLM-L6-v2")
    return _model


def embed_text(text: str):
    model = get_model()
    embedding = model.encode(text)
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