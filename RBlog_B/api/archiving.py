from fastapi import APIRouter
from schemas.archivingSchemas import *
from services.archiving import *

archivingRouter = APIRouter()

@archivingRouter.get("/idList",response_model=archivingDataRes)
async def archivingData():
    return getArchivingData()