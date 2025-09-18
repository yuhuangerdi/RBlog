from models.info import Info

def getInfoCardData():
    info = Info.select().where(Info.id == 1)[0]
    return {
        "avatarUrl": info.avatar_url,
        "nickname": info.nickname,
        "personalSignature": info.personal_signature,
        "articleCount": info.article_count,
        "categoryCount": info.category_count,
        "tagCount": info.tag_count
    }
