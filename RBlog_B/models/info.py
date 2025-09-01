from peewee import IntegerField, CharField
from models.base import BaseModel

class Info(BaseModel):
    """个人信息表模型"""
    
    id = IntegerField(primary_key=True)
    avatar_url = CharField(max_length=255, null=True, default="")
    nickname = CharField(max_length=50, null=False)
    personal_signature = CharField(max_length=500, null=True, default="")
    article_count = IntegerField(default=0)
    category_count = IntegerField(default=2)
    tag_count = IntegerField(null=True, default=0)
    filing = CharField(max_length=100, null=True, default="")
    
    class Meta:
        table_name = 'info'