from core.config import settings
from models.category import Category
from models.article import Article

def getCategoriesData():
    result = Category.select()
    categoryData = []
    for i in result:
        temp={
            "imgPath": i.img_path,
            "name": i.tag_name,
            "description": i .tag_description
        }
        categoryData.append(temp)
    return {
        "data": categoryData
    }

def getSignalCategoryArticle(search: str,page: int):        #从article数据库里查询
    result = Article.select(Article.id).where(Article.tag == search)
    idArray = []
    for i in result:
        idArray.append(i.id)
    nowArray = idArray[(page - 1) * settings.CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE:page * settings.CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE]  # 前端signalCategory页一页十篇文章
    return {
        "id": nowArray
    }

def getSignalCategoryArticleCount(search: str):     #从article数据库里查询
    result = Article.select(Article.id).where(Article.tag == search)
    categorySum = len(result)
    return {
        "sum": categorySum
    }

if __name__ == '__main__':
    print(getSignalCategoryArticleCount("C"))