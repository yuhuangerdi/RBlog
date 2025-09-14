<template>
    <div class="article-page">
        <!-- 新增横幅 -->
        <div class="article-banner">
            <div class="banner-content">
                <h1 class="chinese-text">{{ content.contentCN }}</h1>
                <p class="english-text">{{ content.contentEN }}</p>
            </div>
        </div>
        
        <div class="aside-container container">
            <SideCard ></SideCard>
        </div>
        <div class="main-container container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "ArticlePage"
    }
</script>

<script lang="ts" setup>
    import SideCard from '@/components/SideCard/SideCard.vue';
    import useArticlePage from '../../hooks/useArticlePage/useArticlePage';

    const { content } = useArticlePage();
</script>

<style scoped>
    @import "../../styles/article-page/article-page.css";
</style>