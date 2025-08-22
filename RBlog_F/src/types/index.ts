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

export interface SideCardDataInter {
    saying: string,
    operationDays: number,
    visitorCount: number,
    readingCount: number
}

export interface CategoriesDataInter {
    imgPath: string,
    name: string,
    description: string
}

export interface ArticleApiResponseInter {
  content: string;
  // 可以根据实际API响应添加其他字段
  // id?: number;
  // title?: string;
  // createdAt?: string;
  // updatedAt?: string;
}

export interface HeadingInter {
  id: string;
  text: string;
  level: number;
}
