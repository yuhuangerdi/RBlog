from core.config import settings
from utils.markdownRead import readMdFile

def getHomeArticleIdByPage(page: int):
    idArray = [1,2,3,4,5,6,7,8,9,12,1452,127,523]
    nowArray = idArray[(page-1) * settings.HOME_PAGE_ARTICLE_NUMBER_PER_PAGE :page * settings.HOME_PAGE_ARTICLE_NUMBER_PER_PAGE]       #前端Home页一页五篇文章
    return {
        "homeArticleID": nowArray
    }

def getArticleCardData(id: int):
    return{
        "title": "C语言基础教学"+str(id),
        "commentCount": 42,
        "viewCount": 2345,
        "summary": "C语言是一个应用广泛的编程语言，常用于系统级别的开发中。C语言是一个应用广泛的编程语言，常用于系统级别的开发中。C语言是一个应用广泛的编程语言，常用于系统级别的开发中。C语言是一个应用广泛的编程语言，常用于系统级别的开发中",
        "imgPath": "",
        "author": "Ryan",
        "tags": "C",
        "data": "2024-1-1"
    }

def getArticleContent(id: int):
    filePath = f"./content/article/{id}.md"
    return {
        "content": readMdFile(filePath)
    }