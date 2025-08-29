from pydantic import BaseModel
from typing import Union

class infoCardDataRes(BaseModel):
    avatarUrl: Union[str, None] = None
    nickname: str
    personalSignature: str
    articleCount: int = 0
    categoryCount: int = 0
    tagCount: int = 0