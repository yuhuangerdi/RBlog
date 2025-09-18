from fastapi import APIRouter
from typing import Union
from schemas.otherSchemas import *
from services.other import *

otherRouter = APIRouter()

@otherRouter.get("/articleDropList",response_model=articleDropListRes)
async def articleDropList():
    return getArticleDropList()

@otherRouter.get("/sideCard",response_model=sideCardRes)
async def sideCard():
    return getSideCard()

@otherRouter.get("/pageBannerContent",response_model=pageBannerContentRes)
async def pageBannerContent():
    return getPageBannerContent()
