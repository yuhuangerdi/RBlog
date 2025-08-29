from fastapi import APIRouter

from schemas.userSchemas import *
from services.users import *

usersRouter = APIRouter()

@usersRouter.get('/admin/infoCard',response_model = infoCardDataRes)
async def infoCardData():
    return getInfoCardData()