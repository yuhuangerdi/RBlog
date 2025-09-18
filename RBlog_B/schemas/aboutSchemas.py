from pydantic import BaseModel
from typing import List

class aboutDataSignal(BaseModel):
    id: int
    title: str
    content: str
    date: str

class aboutDataRes(BaseModel):
    data: List[aboutDataSignal]