from core.config import settings
from utils.markdownRead import readMdFile

def getFeelingCount():
    return{
        "sum": 134
    }

def getFeelingArticleIdByPage(page: int):
    idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 1452, 127, 523, 53, 2135, 516, 2135, 1346, 161, 1265, 1235, 126, 1235, 61, 84, 7435, 243, 2153, 73, 1243]
    nowArray = idArray[(page - 1) * settings.CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE:page * settings.CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE]  # 前端feelingPage页一页十篇文章
    return {
        "id": nowArray
    }

def getFeelingContent(id: int):
    filePath = f"./content/about/{id}.md"
    return {
        "title": "title",
        "author": "author",
        "content": readMdFile(filePath),
        "date": "2021-09-09",
        "likeCount": 423,
        "commentCount": 4632,
        "comments": [
            "The article is useful!",
            "What a nice article!",
            "Author u are NB"
        ]
    }