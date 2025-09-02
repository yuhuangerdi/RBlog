from peewee import IntegerField, AutoField
from models.base import BaseModel

class HomeArticle(BaseModel):
    
    id = AutoField()
    article_id = IntegerField(null=False)
    
    class Meta:
        table_name = 'home_article'