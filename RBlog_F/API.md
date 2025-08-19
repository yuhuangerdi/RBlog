# API使用说明

### 一、InfoCard调用接口获取博主信息

#### 1、接口json

InfoCardDataInter {

    avatarUrl: string,

    nickname: string,

    personalSignature: string,

    articleCount: number,

    categoryCount: number,

    tagCount: number,

}

#### 2、测试地址

http://127.0.0.1:4523/m1/5985264-5673651-default/api/infoCard

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

useInfoCard.ts

### 二、HomePage main-container调用接口获取首页展示文章ID

#### 1、接口json

{

    HomeArticleID：[]

}

#### 2、测试地址

http://127.0.0.1:4523/m2/5985264-5673651-default/337094423

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

useScrollPage.ts

### 三、Article Card接受id后像服务器请求数据

#### 1、接口json

{

    title: string,

    commentCount: number,

    viewCount: number,

    summary: string,

    imgPath: string,

    author: string,

    tags: string[],

    date: string,

}

#### 2、测试地址

http://127.0.0.1:4523/m1/5985264-5673651-default/api/ArticleCardData/{id}

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

useArticleCard.ts
