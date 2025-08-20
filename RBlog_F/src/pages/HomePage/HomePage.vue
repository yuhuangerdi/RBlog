<template>
    <div class="home-page">
        <!-- 新增：顶部全屏背景图模块 -->
        <div class="hero-section">
            <!-- 可添加标题、副标题等首屏内容 -->
            <div class="hero-content">
                <h1 class="hero-title">{{ content.contentCN }}</h1>
                <p class="hero-desc">{{ content.contentEN }}</p>
                <el-icon><ArrowDownBold /></el-icon>
            </div>
        </div>
        <!-- 原有内容：用容器包裹，滚动时显示 -->
        <div class="content-wrapper">
            <div class="aside-container container">
                <InfoCard></InfoCard>
            </div>
            <div class="main-container container">
                <HomeScrollPage></HomeScrollPage>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "HomePage"
    }
</script>

<script lang="ts" setup>
    import useHomePage from '@/hooks/useHomePage/useHomePage';
    import InfoCard from '../../components/InfoCard/InfoCard.vue';
    import HomeScrollPage from '../../components/HomeScrollPage/HomeScrollPage.vue';
    import { ElIcon } from 'element-plus';
    import { ArrowDownBold } from '@element-plus/icons-vue'

    const { content } = useHomePage();
</script>

<style scoped>
    @import "../../styles/home-page/home-page.css";
</style>
