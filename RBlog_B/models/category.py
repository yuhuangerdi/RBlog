from peewee import IntegerField, CharField, AutoField
from models.base import BaseModel

class Category(BaseModel):
    
    id = AutoField()
    img_path = CharField(max_length=255, null=False)
    tag_name = CharField(max_length=100, null=False)
    tag_description = CharField(max_length=500, null=False)
    
    class Meta:
        table_name = 'category'