from pydantic import BaseModel
from typing import List

class archivingDataSignal(BaseModel):
    date: int
    id: List[int]

class archivingDataRes(BaseModel):
    data: List[archivingDataSignal]