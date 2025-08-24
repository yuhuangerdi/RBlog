<template>
    <div class="archiving-page">
        <!-- 顶部banner -->
        <div class="article-banner">
            <div class="banner-content">
                <h1 class="chinese-text">{{ content.contentCN }}</h1>
                <p class="english-text">{{ content.contentEN }}</p>
            </div>
        </div>
        
        <div class="container">      
            <div class="content-grid">
                <div class="aside-container">
                    <ArchivingPositionCard 
                        :archiveDates="dateArray" 
                        :currentSelected="selectedDate"
                        @selectMonth="handleSelectMonth"
                    ></ArchivingPositionCard>
                </div>
                
                <div class="main-container">
                    <transition-group name="articles-transition" tag="div">
                        <ArchivingCard 
                            v-for="article in filteredArticles" 
                            :key="article.date"
                            :date="article.date" 
                            :id="article.id"
                        ></ArchivingCard>
                    </transition-group>
                    
                    <div v-if="filteredArticles.length === 0" class="no-articles">
                        <el-icon size="48" class="empty-icon"><DocumentRemove /></el-icon>
                        <p>该月份暂无文章</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "ArchivingPage"
    }
</script>

<script lang="ts" setup>
    import ArchivingCard from '../../components/ArchivingCard/ArchivingCard.vue';
    import ArchivingPositionCard from '../../components/ArchivingPositionCard/ArchivingPositionCard.vue';
    import { DocumentRemove } from "@element-plus/icons-vue";
    import useArchivingPage from '../../hooks/useArchivingPage/useArchivingPage.ts';

    const {
        content,
        dateArray,
        selectedDate,
        filteredArticles,
        handleSelectMonth
    } = useArchivingPage();
</script>

<style scoped>
    @import "../../styles/archiving-page/archiving-page.css";
</style>
