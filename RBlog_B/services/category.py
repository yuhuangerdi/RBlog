from core.config import settings
from models.category import Category

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
    idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 1452, 127, 523, 53, 2135, 516, 2135, 1346, 161, 1265 ,1235, 126, 1235, 61, 84, 7435, 243, 2153, 73, 1243]
    nowArray = idArray[(page - 1) * settings.CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE:page * settings.CATEGORY_SIGNAL_ARTICLE_NUMBER_PER_PAGE]  # 前端signalCategory页一页十篇文章
    return {
        "id": nowArray
    }

def getSignalCategoryArticleCount(search: str):     #从article数据库里查询
    return {
        "sum": 109
    }

if __name__ == '__main__':
    getCategoriesData()