from utils.markdownRead import readMdFile

def getAboutData():
    aboutArticleCount = 3       # 实际上应该从数据库获取
    aboutArticleArr = []
    for i in range(1, aboutArticleCount+1):         # 实际上应该从数据库获取
        aboutArticleArr.append({
            "id": i,
            "title": "这个网站",
            "content": readMdFile(f"./content/about/{i}.md"),
            "date": f"2021-9-{i}"
        })
    return {
        "data":aboutArticleArr
    }