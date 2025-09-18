import os
from datetime import datetime,date
from dotenv import load_dotenv
from typing import ClassVar
from pydantic_settings import BaseSettings

load_dotenv()

class Settings(BaseSettings):
    # 项目基础配置
    ENVIRONMENT:str = os.getenv("ENVIRONMENT", "dev")
    DEBUG:bool = os.getenv("DEBUG", "False").lower() == "true"
    API_HOST:str = os.getenv("API_HOST", "localhost")
    API_PORT:int = int(os.getenv("API_PORT", os.getenv("PORT", 8000))) 
    API_ADDR:str = os.getenv("API_ADDR", "localhost")

    # 数据库配置
    DB_HOST:str = os.getenv("DB_HOST", "localhost")
    DB_PORT:int = int(os.getenv("DB_PORT", 3306))
    DB_USER:str = os.getenv("DB_USER", "root")
    DB_PASSWORD:str = os.getenv("DB_PASSWORD", "")
    DB_NAME:str = os.getenv("DB_NAME", os.getenv("DB_NAME", ""))

    # 常数配置
    # home页一次加载文章个数
    HOME_PAGE_ARTICLE_NUMBER_PER_PAGE:int = os.getenv("HOME_PAGE_ARTICLE_NUMBER_PER_PAGE",5)
    # categorySignal页一页展示文章个数
    CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE:int = os.getenv("CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE",10)
    # blog正式运营日期
    OPERATION_DATE:ClassVar[date]= datetime.strptime(os.getenv('OPERATION_DATE',2025-10-1), '%Y-%m-%d').date()


settings = Settings()        # 实例化配置类