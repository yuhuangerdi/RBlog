import os
from core.config import settings
from utils.markdownRead import readMdFile
from models.feeling import Feeling
from utils.commentServerToFrontendFeeling import processFeelingComment

def getFeelingCount():
    all_files = [f for f in os.listdir("./content/feeling") if f.endswith('.md')]
    feelingSum = len(all_files)
    return {"sum": feelingSum}

def getFeelingArticleIdByPage(page: int):
    result = Feeling.select()
    idArray = []
    for i in result:
        idArray.append(i.id)
    idArray.reverse()
    nowArray = idArray[(page - 1) * settings.CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE:page * settings.CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE]  # 前端feelingPage页一页十篇文章
    print(nowArray)
    return {
        "id": nowArray
    }

def getFeelingContent(id: int):
    feelingContent = Feeling.select().where(Feeling.id == id).first()
    filePath = f"./content/feeling/{id}.md"
    return {
        "title": feelingContent.title,
        "author": feelingContent.author,
        "content": readMdFile(filePath),
        "date": feelingContent.pub_date.strftime("%Y-%m-%d"),
        "likeCount": feelingContent.star_count,
        "commentCount": feelingContent.comment_count,
        "comments": processFeelingComment(f"./comments/feeling/{id}.json")
    }
