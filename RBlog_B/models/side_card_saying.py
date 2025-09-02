from peewee import IntegerField, CharField, AutoField
from models.base import BaseModel

class SideCardSaying(BaseModel):
    
    id = AutoField()
    saying = CharField(max_length=500, null=False)
    
    class Meta:
        table_name = 'side_card_saying'