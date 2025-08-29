from fastapi import APIRouter

userRouter = APIRouter()

@userRouter.get('/admin/infoCard')
async def getInfoCardData():
    return{
        "avatarUrl" : "",
        "nickname" : "Ryan",
        "personalSignature" : "凡是过往，皆为序章。",
        "articleCount" : 564,
        "categoryCount" : 24,
        "tagCount" : 321
    }