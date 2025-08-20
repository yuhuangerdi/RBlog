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

{

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

### 六、CategoriyAll调用接口（CategoriesData）获取侧边栏信息

#### 1、接口json（type CategoriesDataInter）

 {

    imgPath: string,

    name: string,

    description: string

#### 2、测试地址

http://127.0.0.1:4523/m2/5985264-5673651-default/338676943

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

CategoriyAll.ts



### 七、多页面调用接口（PageBannerContent）获取横幅上的文本信息

#### 1、接口json

{

homePage{

    contentCN: string,

    contentEN:string

    }

}

#### 2、测试地址

http://127.0.0.1:4523/m1/5985264-5673651-default/api/PageBannerContent

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

useHomePage.ts

useArticlePage.ts



### 八、CategorySignal调用接口（SignalCategotyArticle）获取某类某页文章ID

#### 1、接口json

{

    id: number[]

}

#### 2、测试地址

http://127.0.0.1:4523/m1/5985264-5673651-default/api/SignalCategotyArticle

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

useCategorySignal.ts

#### 5、post的参数

**此api为post**

{

    search: string,

    page: number

}



### 九、CategorySignal调用接口（SignalCategotyArticleCount）获取某类文章个数

#### 1、接口json

{

    sum: number

}

#### 2、测试地址

http://127.0.0.1:4523/m1/5985264-5673651-default/api/SignalCategotyArticleCount

#### 3、正式api地址

apiRBlog.yyluo.cn/

#### 4、文件

useCategorySignal.ts

#### 5、get的查询参数

**此api为带查询参数的get**

{

    search: string,

}
