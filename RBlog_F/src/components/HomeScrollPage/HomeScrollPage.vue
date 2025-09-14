<template>
    <div class="home-scroll-page">
        <ArticleCard 
            class="article-card"
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
        name:"HomeScrollPage",
    }
</script>

<script lang="ts" setup>
    import ArticleCard from '../../components/ArticleCard/ArticleCard.vue';
    import LoadMore from '../../components/LoadMore/LoadMore.vue'; // 引入新组件
    import useHomeScrollPage from '../../hooks/useHomeScrollPage/useHomeScrollPage';  
    const { homeArticleID, loading, noMore, loadMore } = useHomeScrollPage();
</script>

<style scoped>
    @import "../../styles/home-scroll-page/home-scroll-page.css";
</style>