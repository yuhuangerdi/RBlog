from peewee import IntegerField, CharField, DateField, BooleanField, AutoField
from models.base import BaseModel

class Article(BaseModel):
    
    id = AutoField()
    title = CharField(max_length=200, null=False)
    comment_count = IntegerField(default=0)
    view_count = IntegerField(default=0)
    summary = CharField(max_length=500, null=False)
    author = CharField(max_length=50, null=False)
    tag = CharField(max_length=100, null=False)
    pub_date = DateField(null=False)
    date_number = IntegerField()
    category_id = IntegerField(null=False)
    is_showed = IntegerField(null=False)
    
    class Meta:
        table_name = 'article'