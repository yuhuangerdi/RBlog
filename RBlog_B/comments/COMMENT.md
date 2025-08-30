### 后端需储存数据

```ts
lv1FeelingComment{
    //一级评论
    
    comment: string, 
    nickname: string 
    email: string 
    children: Array<lv2FeelingComment> //所有二级子评论 
    date: string //评论日期 
} 
```
```ts
lv2FeelingComment{ 
    //二级评论 
    comment: string 
    nickname: string 
    email: string 
    children: Array<lv3FeelingComment> //所有三级子评论 
    date: string //评论日期 
} 
```
```ts
lv3FeelingComment{ 
    //三级评论 
    comment: string 
    nickname: string 
    email: string 
    respondent: string //回复的谁的评论 
    date: string //评论日期 
}
```

