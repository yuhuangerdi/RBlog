import uvicorn
from core.config import settings

def run():
    uvicorn.run(
        app = "api.app:app",
        host = settings.API_HOST,
        port = settings.API_PORT,
        reload = settings.DEBUG,
    )

if __name__ == "__main__":
    run()