import os
from utils.markdownRead import readMdFile
from models.about import About

def getAboutCount():
    all_files = [f for f in os.listdir("./content/about") if f.endswith('.md')]
    AboutSum = len(all_files)
    return AboutSum

def getAboutData():
    result = About.select()
    aboutArticleArr = []
    for i in result:
        aboutArticleArr.append({
            "id": i.id,
            "title": i.title,
            "content": readMdFile(f"./content/about/{i.id}.md"),
            "date": i.pub_date.strftime("%Y-%m-%d")
        })
    return {
        "data":aboutArticleArr
    }