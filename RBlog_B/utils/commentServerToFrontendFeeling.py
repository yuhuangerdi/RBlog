import json

def processFeelingComment(filePath:str):
    with open(filePath,"r",encoding="utf-8") as file:
        data = json.load(file)
    result = data["comments"]
    return result