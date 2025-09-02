from peewee import IntegerField, AutoField
from models.base import BaseModel

class SideCard(BaseModel):
    
    id = AutoField()
    visitor_count = IntegerField(default=0)
    reading_count = IntegerField()
    
    class Meta:
        table_name = 'side_card'