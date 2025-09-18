from fastapi import APIRouter
from schemas.messageSchemas import *
from services.message import *

messageRouter = APIRouter()

@messageRouter.get("/comments/content/{page}")
async def messageComments(page:int):
    return getMessageComments(page)

@messageRouter.get("/comments/count")
async def messageCount():
    return getMessageCount()["count"]