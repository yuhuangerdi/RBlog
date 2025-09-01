from peewee import Model
from db.connection import db

class BaseModel(Model):
    """基础模型类，所有其他模型都继承此类"""
    
    class Meta:
        database = db