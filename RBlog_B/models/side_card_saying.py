from peewee import IntegerField, CharField, AutoField
from models.base import BaseModel

class SideCardSaying(BaseModel):
    """侧边卡片名言表模型"""
    
    id = AutoField()
    saying = CharField(max_length=500, null=False)
    
    class Meta:
        table_name = 'side_card_saying'