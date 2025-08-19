<template>
    <div class="article-scroll-page">
        <ArticleCard 
            v-for="arti in homeArticleID" 
            :key="arti" 
            :articleID="arti"
        ></ArticleCard>
        <!-- 新增加载更多组件 -->
        <LoadMore 
            :loading="loading" 
            :no-more="noMore"
            @loadMore="loadMore"
        />
    </div>
</template>

<script lang="ts">
    export default {
        name:"ArticleScrollPage"
    }
</script>

<script lang="ts" setup>
    import ArticleCard from '../../components/ArticleCard/ArticleCard.vue';
    import LoadMore from '../../components/LoadMore/LoadMore.vue'; // 引入新组件
    import useScrollPage from '../../hooks/useArticleScrollPage/useArticleScrollPage';  
    const { homeArticleID, loading, noMore, loadMore } = useScrollPage();
</script>

<style scoped>
    .article-scroll-page {
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>