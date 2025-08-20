# API使用说明

### 一、InfoCard调用接口（InfoCardData）获取博主信息

#### 1、接口json（type InfoCardDataInter）

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



### 二、HomePage main-container调用接口（HomeArticleID）获取首页展示文章ID

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



### 三、Article Card调用接口（ArticleCardData）接受id后像服务器请求数据

#### 1、接口json（type ArticleCardDataInter）

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



### 四、topNavigateBar调用接口（ArticleDropdownList）获取文章目录下拉栏

#### 1、接口json

{

    ArticleDropdownList: string[]

}

#### 2、测试地址

http://127.0.0.1:4523/m1/5985264-5673651-default/api/ArticleDropdownList

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

useTopNavigateBar.ts



### 五、SideCard调用接口（SideCard）获取侧边栏信息

#### 1、接口json（type SideCardDataInter）

SideCardDataInter {

    saying: string,

    operationDays: number,

    visitorCount: number,

    readingCount: number

}

#### 2、测试地址

http://127.0.0.1:4523/m1/5985264-5673651-default/api/SideCard

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

useSideCard.ts
