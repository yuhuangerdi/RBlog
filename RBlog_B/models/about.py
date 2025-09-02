from peewee import IntegerField, CharField, DateField, AutoField
from models.base import BaseModel

class About(BaseModel):
    
    id = AutoField()
    title = CharField(max_length=200, null=False)
    pub_date = DateField(null=False)
    
    class Meta:
        table_name = 'about'
