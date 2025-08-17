export interface InfoCardDataInter {
    avatarUrl: string,
    nickname: string,
    personalSignature: string,
    articleCount: number,
    categoryCount: number,
    tagCount: number,
}

export interface ArticleCardDataInter {
    title: string,
    commentCount: number,
    viewCount: number,
    summary: string,
    imgPath: string,
    author: string,
    tags: string[],
    date: string,
}