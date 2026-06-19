from backend.database.connection import Base
from backend.config.database_config import engine

# Import all models here
from backend.models.project import Project
from backend.models.member import Member
from backend.models.task import Task
from backend.models.progress import Progress


def create_tables():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    create_tables()