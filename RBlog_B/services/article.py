from core.config import settings
from utils.markdownRead import readMdFile
from models.home_article import HomeArticle
from models.article import Article

def getHomeArticleIdByPage(page: int):
    result = HomeArticle.select()
    idArray = []
    for i in result:
        idArray.append(i.article_id)
    nowArray = idArray[(page-1) * settings.HOME_PAGE_ARTICLE_NUMBER_PER_PAGE :page * settings.HOME_PAGE_ARTICLE_NUMBER_PER_PAGE]       #前端Home页一页五篇文章
    return {
        "homeArticleID": nowArray
    }

def getArticleCardData(id: int):
    articleCardData = Article.select().where(Article.id == id).first()
    return{
        "title": articleCardData.title,
        "commentCount": articleCardData.comment_count,
        "viewCount": articleCardData.view_count,
        "summary": articleCardData.summary,
        "imgPath": f"https://{settings.API_HOST}:{settings.API_PORT}/static/picture/article/{id}/0.png",
        "author": articleCardData.author,
        "tags": articleCardData.tag,
        "data": articleCardData.pub_date.strftime("%Y-%m-%d")
    }

def getArticleContent(id: int):
    filePath = f"./content/article/{id}.md"
    articleRes = Article.get(Article.id == id)
    articleRes.view_count = articleRes.view_count+1
    articleRes.save(only=[Article.view_count])
    return {
        "content": readMdFile(filePath)
    }