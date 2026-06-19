from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.config.settings import settings

from backend.api.project_routes import router as project_router
from backend.api.team_routes import router as team_router
from backend.api.task_routes import router as task_router
from backend.api.progress_routes import router as progress_router


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(project_router)
app.include_router(team_router)
app.include_router(task_router)
app.include_router(progress_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to Forge API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }