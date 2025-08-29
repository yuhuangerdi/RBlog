from pydantic import BaseModel
from typing import List

class homeArticleIdRes(BaseModel):
    homeArticleID: List[int]

class articleCardDataRes(BaseModel):
    title: str
    commentCount: int
    viewCount: int
    summary: str
    imgPath: str
    author: str
    tags: str
    data: str

class articleContentRes(BaseModel):
    content: str