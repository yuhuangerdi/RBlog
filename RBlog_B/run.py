import uvicorn
from core.config import settings
from db.keepDBAlive import start_db_heartbeat

def run():
    # 启动数据库心跳守护线程
    start_db_heartbeat()
    
    uvicorn.run(
        app = "api.app:app",
        host = settings.API_HOST,
        port = settings.API_PORT,
        reload = settings.DEBUG,
    )

if __name__ == "__main__":
    run()