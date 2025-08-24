<template>
    <div class="archiving-card">
        <!-- 月份标题栏 -->
        <div class="archiving-header">
        <div class="header-content">
            <div class="month-indicator"></div>
            <h3>{{ formatDate(date) }}</h3>
        </div>
        <div class="article-count">
            <el-icon size="14"><Document /></el-icon>
            {{ props.id.length }} 篇文章
        </div>
        </div>
        
        <!-- 文章列表容器 -->
        <div class="articles-list">
        <ArticleCard 
            v-for="id in props.id" 
            :key="id" 
            :articleID="id" 
            class="article-item"
        />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from "vue";
    import ArticleCard from "../ArticleCard/ArticleCard.vue";
    import { ElIcon } from "element-plus";
    import { Document } from "@element-plus/icons-vue";

    // 接收父组件传递的月份编码和文章ID数组
    const props = defineProps<{
        date: number; // 格式：年份*12 + 月份（0-11）
        id: number[]; // 该月份下的文章ID列表
    }>();

    // 格式化月份编码为"YYYY年MM月"
    const formatDate = (dateNum: number) => {
        const year = Math.floor(dateNum / 12);
        const month = dateNum % 12 + 1; // 转换为1-12月
        return `${year}年${month.toString().padStart(2, '0')}月`;
    };
</script>

<style scoped>
    @import "../../styles/archiving-card/archiving-card.css";
</style>
