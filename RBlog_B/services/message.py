from utils.commentServerToFrontendMessage import processLv1Comment
import os

def getMessageComments(page):
    LV1_COMMENTS_COUNT = getMessageCount()["count"]
    firstId = LV1_COMMENTS_COUNT - (page-1) * 10
    result = []
    for i in range(firstId, ((firstId - 10) if (firstId - 10) >= 0 else 0), -1):
        filePath = f"./comments/message/{i}.json"
        result.append(processLv1Comment(filePath))
    return {"comments":result}

def getMessageCount():
    all_files = [f for f in os.listdir("./comments/message") if f.endswith('.json')]
    LV1_COMMENTS_COUNT = len(all_files)
    return {"count": LV1_COMMENTS_COUNT}
