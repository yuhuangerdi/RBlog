from fastapi import APIRouter
from schemas.aboutSchemas import *
from services.about import *

aboutRouter = APIRouter()

@aboutRouter.get("/articleData",response_model=aboutDataRes)
async def aboutData():
    return getAboutData()