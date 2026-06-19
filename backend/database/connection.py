from sqlalchemy.orm import declarative_base

from backend.config.database_config import SessionLocal


Base = declarative_base()


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()