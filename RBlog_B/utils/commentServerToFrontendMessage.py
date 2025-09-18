#用于将服务器储存的评论转化为发给前端的
import json

def processLv1Comment(filePath:str):
    with open(filePath,"r",encoding="utf-8") as file:
        data = json.load(file)
    result = {
        "comment": data["comment"],
        "nickname": data["nickname"],
        "email": data["email"],
        "date": data["date"],
        "children": [] if data["children"] == [] else processLv2Comment(data["children"])
    }
    return result

def processLv2Comment(lv1Children):
    result = []
    for item in lv1Children:
        temp = {
            "comment": item["comment"],
            "nickname": item["nickname"],
            "email": item["email"],
            "date": item["date"],
            "children": [] if item["children"] == [] else processLv3Comment(item["children"])
        }
        result.append(temp)
    return result

def processLv3Comment(lv2Children):
    result = []
    for item in lv2Children:
        temp = {
            "comment": item["comment"],
            "nickname": item["nickname"],
            "email": item["email"],
            "date": item["date"],
            "respondent": item["respondent"]
        }
        result.append(temp)
    return result