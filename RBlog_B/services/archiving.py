from collections import defaultdict

from models.article import Article

def getArchivingData():
    result = Article.select().order_by(Article.date_number.desc())
    articles = defaultdict(list)
    for i in result:
        articles[i.date_number-1].append(i.id)
    returnArr = {
        "data": [
            {"date": date_num, "id": ids}
            for date_num, ids in articles.items()
        ]
    }
    return returnArr
