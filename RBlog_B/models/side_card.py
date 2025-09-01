from peewee import IntegerField, AutoField
from models.base import BaseModel

class SideCard(BaseModel):
    """侧边卡片表模型"""
    
    id = AutoField()
    visitor_count = IntegerField(default=0)
    reading_count = IntegerField()
    
    class Meta:
        table_name = 'side_card'