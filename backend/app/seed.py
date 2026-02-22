from .database import SessionLocal
from .models import ResumeChunk
from .rag import embed_text

resume_sections = [

    # Education
    ("education_overview",
     "Waseem Khan is pursuing a Bachelor of Technology in Computer Science and Engineering at Woxsen University (2023-2027) with a CGPA of 9.3/10."),

        # Tracks Project

    ("tracks_overview",
     "Tracks is a full-stack finance expense tracking system designed with a focus on clarity, usability, and analytics."),

    ("tracks_tech_stack_summary",
     "The technology stack used in the Tracks project includes React and Recharts for the frontend, and Spring Boot, Spring Security, and JPA/Hibernate for the backend. PostgreSQL was used as the database."),

    ("tracks_backend_framework",
     "In the Tracks project, the backend framework used was Spring Boot. Spring Security was used for authentication and authorization."),

    ("tracks_authentication",
     "Authentication in the Tracks project was implemented using JWT-based authentication with Spring Security filters to secure REST APIs."),

    ("tracks_database",
     "The Tracks project used PostgreSQL as the database and JPA/Hibernate as the ORM framework for mapping entities such as User, Expense, Category, Goal, and Streak."),

    ("tracks_frontend_framework",
     "The frontend framework used in the Tracks project was React, and Recharts was used for data visualization and analytics dashboards."),

    # PEISR Project
    ("peisr_overview",
     "PEISR stands for Prompt Enhancement via Intent-Sensitive Routing. It is a Python-based intermediate system that improves LLM response quality by preprocessing user prompts before generation."),

    ("peisr_intent_classification",
     "PEISR implements intent classification with categories SOCIAL, QA, TASK, TECH, and CREATIVE using custom heuristics with an LLM fallback mechanism."),

    ("peisr_rewrite_system",
     "PEISR includes intent-aware rewrite gating to selectively rewrite prompts while preserving user intent, along with a rubric-based prompt quality scoring system."),

    ("peisr_generation_routing",
     "PEISR routes prompts through intent-specific generation policies with temperature controls and includes a controlled self-refinement loop to prevent over-editing."),

    # Internship
    ("internship_overview",
     "Waseem worked as a Backend Web Development Intern at VAlignIt Technologies for 2 months."),

    ("internship_backend_work",
     "During the internship, Waseem built Spring Boot backends from scratch, implemented JWT authentication using Spring Security, developed CRUD REST APIs with DTO validation, centralized exception handling, proper HTTP status codes, and worked on a backend file management system using local storage."),

    # Skills
    ("skills_languages",
     "Waseem's programming languages include Java, Python, JavaScript, and SQL."),

    ("skills_backend",
     "Waseem has backend experience with Spring Boot, Spring Security, REST APIs, JPA/Hibernate, and PostgreSQL."),

    ("skills_frontend",
     "Waseem has frontend experience with React, HTML, CSS, and Recharts."),

    ("skills_tools",
     "Waseem uses developer tools including Postman and Git.")
]


def seed():
    db = SessionLocal()

    for section, content in resume_sections:
        embedding = embed_text(content)

        chunk = ResumeChunk(
            section=section,
            content=content,
            embedding=embedding
        )

        db.add(chunk)

    db.commit()
    db.close()
    print("Refined resume seeded successfully!")


if __name__ == "__main__":
    seed()