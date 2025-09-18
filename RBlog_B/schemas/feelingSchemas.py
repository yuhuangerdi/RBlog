from pydantic import BaseModel
from typing import List

class feelingCountRes(BaseModel):
    sum: int

class feelingArticleIdByPageReq(BaseModel):
    page: int

class feelingArticleIdByPageRes(BaseModel):
    id: List[int]

class feelingContentRes(BaseModel):
    title: str
    author: str
    content: str
    date: str
    likeCount: int
    commentCount: int
    comments: List[str]