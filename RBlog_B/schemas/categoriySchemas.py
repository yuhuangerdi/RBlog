from pydantic import BaseModel
from typing import List

class categorySignalData(BaseModel):
    imgPath: str
    name: str
    description: str

class categoryDataRes(BaseModel):
    data: List[categorySignalData]

class signalCategoryArticleReq(BaseModel):         #请求参数
    search: str
    page: int

class signalCategoryArticleRes(BaseModel):         #相应参数
    id: List[int]

class signalCategoryArticleCountRes(BaseModel):
    sum: int