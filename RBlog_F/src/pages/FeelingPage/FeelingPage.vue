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
            <SideCard></SideCard>
        </div>
        <div class="main-container container">
            <FeelingScrollPage></FeelingScrollPage>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "FeelingPage"
    }
</script>

<script lang="ts" setup>
    import SideCard from '@/components/SideCard/SideCard.vue';
    import useFeelingPage from '@/hooks/useFeelingPage/useFeelingPage';
    import FeelingScrollPage from './FeelingScrollPage/FeelingScrollPage.vue';

    const { content } = useFeelingPage();
</script>

<style scoped>
    @import "../../styles/feeling-page/feeling-page.css";
</style>