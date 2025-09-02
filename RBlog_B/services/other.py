from datetime import date,datetime
from core.config import settings
from models.droplist import Droplist
from models.side_card_saying import SideCardSaying
from models.side_card import SideCard
from models.page_banner_content import PageBannerContent

def getArticleDropList():
    result = Droplist.select().where(Droplist.belong == "article")
    articleDropList = []
    for i in result:
        articleDropList.append(i.content)
    return{
        "articleDropdownList": articleDropList
    }

def getSideCard():
    operationDay = settings.OPERATION_DATE
    todayDate = date.today()
    dateDiff = (todayDate-operationDay).days
    todayWeekday = datetime.today().weekday() + 1
    saying = SideCardSaying.select().where(SideCardSaying.id == todayWeekday).first()
    count = SideCard.select().where(SideCard.id == 1).first()
    print()
    return{
        "saying": saying.saying,
        "operationDays": dateDiff,
        "visitorCount": count.visitor_count,
        "readingCount": count.reading_count
    }

def getPageBannerContent():
    banner = PageBannerContent.select()
    return{
        "homePage": {
            "contentCN": banner[0].CN,
            "contentEN": banner[0].EN
        },
        "articlePage":{
            "contentCN": banner[1].CN,
            "contentEN": banner[1].EN
        },
        "feelingPage": {
            "contentCN": banner[2].CN,
            "contentEN": banner[2].EN
        },
        "archivingPage": {
            "contentCN": banner[3].CN,
            "contentEN": banner[3].EN
        },
        "messagePage": {
            "contentCN": banner[4].CN,
            "contentEN": banner[4].EN
        }
    }
