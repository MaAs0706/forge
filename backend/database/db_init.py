from backend.database.create_tables import create_tables


def initialize_database():
    create_tables()
    print("Database initialized successfully")


if __name__ == "__main__":
    initialize_database()