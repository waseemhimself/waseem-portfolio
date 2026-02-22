from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from pgvector.sqlalchemy import Vector
from .database import Base

class ResumeChunk(Base):
    __tablename__ = "resume_chunks"

    id = Column(Integer, primary_key=True, index=True)
    section = Column(String, nullable=False)  # education, project, skills, etc.
    content = Column(Text, nullable=False)
    embedding = Column(Vector(384))  # embedding size (we’ll confirm model size later)