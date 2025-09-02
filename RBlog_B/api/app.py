from annotated_types.test_cases import cases
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from api.users import usersRouter
from api.article import articleRouter
from api.other import otherRouter
from api.category import categoryRouter
from api.feeling import feelingRouter
from api.archiving import archivingRouter
from api.about import aboutRouter
from api.message import messageRouter

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["0.0.0.0"],  # 允许的源，根据实际情况调整
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/static", StaticFiles(directory="static"))

app.include_router(usersRouter, prefix="/users")
app.include_router(articleRouter, prefix="/article")
app.include_router(otherRouter, prefix="/other")
app.include_router(categoryRouter, prefix="/category")
app.include_router(feelingRouter, prefix="/feeling")
app.include_router(archivingRouter, prefix="/archiving")
app.include_router(aboutRouter, prefix="/about")
app.include_router(messageRouter, prefix="/message")

@app.get("/")
async def root():
    return {"message": "Hello World!"}