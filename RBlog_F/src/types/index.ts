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
    tags: string,
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

export interface FeelingInter {
  title: string;
  author: string;
  content: string;
  date: string;
  likeCount: number;
  commentCount: number;
  comments: string[];
}

export interface CommentFormInter {
  nickname: string;
  email: string;
  content: string;
  captcha: string; // 新增验证码字段
}

export interface ArchivingDataInter {
    date: number;
    id: number[];
}

export interface lv1FeelingInter {//一级评论
    comment:string,
    nickname:string,
    email:string,
    children:Array<lv2FeelingInter>//所有子评论
    date:string //评论日期
}

export interface lv2FeelingInter {//二级评论
    comment:string,
    nickname:string,
    email:string,
    respondent:string,//回复的谁的评论
    date:string //评论日期
}