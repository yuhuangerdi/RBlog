import os
from utils.markdownRead import readMdFile

def getAboutCount():
    all_files = [f for f in os.listdir("./content/about") if f.endswith('.md')]
    AboutSum = len(all_files)
    return AboutSum

def getAboutData():
    aboutArticleCount = getAboutCount()
    aboutArticleArr = []
    for i in range(1, aboutArticleCount+1):
        aboutArticleArr.append({
            "id": i,
            "title": "这个网站",
            "content": readMdFile(f"./content/about/{i}.md"),
            "date": f"2021-9-{i}"
        })
    return {
        "data":aboutArticleArr
    }