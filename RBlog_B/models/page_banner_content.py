from peewee import IntegerField, CharField, AutoField
from models.base import BaseModel

class PageBannerContent(BaseModel):
    """页面横幅内容表模型"""
    
    id = AutoField()
    belong_page = CharField(max_length=100, null=False)
    CN = CharField(max_length=500, null=False)
    EN = CharField(max_length=500, null=False)
    
    class Meta:
        table_name = 'page_banner_content'