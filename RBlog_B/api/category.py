from fastapi import APIRouter
from schemas.categoriySchemas import *
from services.category import *

categoryRouter = APIRouter()

@categoryRouter.get("/allCategories",response_model=categoryDataRes)
async def categoriesData():
    return getCategoriesData()

@categoryRouter.post("/signalCategory/ids",response_model=signalCategoryArticleRes)
async def signalCategoryArticle(req: signalCategoryArticleReq):
    return getSignalCategoryArticle(req.search,req.page)

@categoryRouter.get("/signalCategory/count",response_model=signalCategoryArticleCountRes)
async def signalCategoryArticleCount(search: str):
    return getSignalCategoryArticleCount(search)