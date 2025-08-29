from fastapi import APIRouter
from schemas.feelingSchemas import *
from services.feeling import *

feelingRouter = APIRouter()

@feelingRouter.get("/sum",response_model=feelingCountRes)
async def feelingCount():
    return getFeelingCount()

@feelingRouter.post("/id",response_model=feelingArticleIdByPageRes)
async def feelingArticleIdByPage(req: feelingArticleIdByPageReq):
    return getFeelingArticleIdByPage(req.page)

@feelingRouter.get("/content/{id}",response_model=feelingContentRes)
async def feelingContent(id: int):
    return getFeelingContent(id)