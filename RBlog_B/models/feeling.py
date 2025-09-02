from peewee import IntegerField, CharField, DateField, AutoField
from models.base import BaseModel

class Feeling(BaseModel):
    
    id = AutoField()
    title = CharField(max_length=200, null=False)
    comment_count = IntegerField(default=0)
    star_count = IntegerField(default=0)
    pub_date = DateField(null=False)
    author = CharField(max_length=50, null=False)
    
    class Meta:
        table_name = 'feeling'