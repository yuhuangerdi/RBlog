from pydantic import BaseModel
from typing import List
from enum import Enum

class articleDropListRes(BaseModel):
    articleDropdownList:List[str]

class sideCardRes(BaseModel):
    saying: str
    operationDays: int
    visitorCount: int
    readingCount: int

class pageBannerSignalContent(BaseModel):
    contentCN: str
    contentEN: str

class pageBannerContentRes(BaseModel):
    homePage: pageBannerSignalContent
    articlePage: pageBannerSignalContent
    feelingPage: pageBannerSignalContent
    archivingPage: pageBannerSignalContent
    messagePage: pageBannerSignalContent
