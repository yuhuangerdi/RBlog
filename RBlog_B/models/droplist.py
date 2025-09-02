from peewee import IntegerField, CharField, AutoField
from models.base import BaseModel

class Droplist(BaseModel):
    
    id = AutoField()
    content = CharField(max_length=500, null=False)
    belong = CharField(max_length=100, null=False)
    
    class Meta:
        table_name = 'droplist'