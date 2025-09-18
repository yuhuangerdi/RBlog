import time
import threading
import logging
from db.connection import db
from models.article import Article

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def keep_db_alive():
    """数据库心跳守护函数，每小时执行一次简单查询保持连接活跃"""
    while True:
        try:
            # 执行一个简单的查询来保持连接活跃
            count = Article.select().count()
            logger.info(f"数据库心跳检测成功，文章总数: {count}")
        except Exception as e:
            logger.error(f"数据库心跳检测失败: {e}")
        
        # 等待1小时（3600秒）
        time.sleep(3600)

def start_db_heartbeat():
    """启动数据库心跳守护线程"""
    heartbeat_thread = threading.Thread(
        target=keep_db_alive,
        name="DB-Heartbeat",
        daemon=True  # 设置为守护线程，随主进程退出
    )
    heartbeat_thread.start()
    logger.info("数据库心跳守护线程已启动")
    return heartbeat_thread

# 如果直接运行此文件，可以测试心跳功能
if __name__ == "__main__":
    start_db_heartbeat()
    # 主线程等待，让守护线程运行
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        logger.info("数据库心跳守护程序已停止")