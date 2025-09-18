from fastapi import APIRouter
from schemas.articleSchemas import *
from services.article import *

articleRouter = APIRouter()

@articleRouter.get("/homeArticleId",response_model=homeArticleIdRes)
async def homeArticleId(page: int):
    return getHomeArticleIdByPage(page)

@articleRouter.get("/articleCard/{id}",response_model=articleCardDataRes)
async def articleCardData(id: int):
    return getArticleCardData(id)

@articleRouter.get("/content/{id}",response_model=articleContentRes)
async def articleContent(id: int):
    return getArticleContent(id)