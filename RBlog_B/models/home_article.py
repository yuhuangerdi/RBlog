from peewee import IntegerField, AutoField
from models.base import BaseModel

class HomeArticle(BaseModel):
    """首页文章表模型"""
    
    id = AutoField()
    article_id = IntegerField(null=False)
    
    class Meta:
        table_name = 'home_article'