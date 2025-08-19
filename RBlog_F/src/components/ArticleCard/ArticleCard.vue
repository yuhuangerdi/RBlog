<template>
    <div class = "article-card" @click="view(articleID)">
        <div class = "article-card-header">
            <span class="article-card-title">{{ articleInfo?.title }}</span>
            <div class="article-card-statistics"> 
                <span class="article-comment-count"><el-icon><Comment /></el-icon>{{ articleInfo?.commentCount }}</span>
                <span class="article-view-count"><el-icon><View /></el-icon>12{{ articleInfo?.viewCount }}</span>
            </div>
        </div>
        <div class = "article-card-content">
            <span class="article-card-summary">{{ articleInfo?.summary }}</span>
            <img :src="articleInfo?.imgPath" alt="图片请求失败" class="article-card-image">
        </div>
        <div class = "article-card-footer">
            <span class="article-card-author">{{ articleInfo?.author }} </span>
            <div class="article-card-tags-container">
                <el-tag class="article-card-tag" type="primary" v-for="t in articleInfo?.tags" :key="t" size = "small" @click.stop="viewTag()">{{ t }}</el-tag>
            </div>
            <span class="article-card-date">{{ articleInfo?.date }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name:"ArticleCard"
    }
</script>

<script lang="ts" setup>
    import { ElIcon} from "element-plus";
    import { View } from "@element-plus/icons-vue";
    import { Comment } from "@element-plus/icons-vue";
    import { ElTag } from "element-plus";
    import { defineProps } from "vue";

    import useArticleCard from "@/hooks/useArticleCard/useArticleCard";
    let props = defineProps(["articleID"]);
    const { articleInfo, view, viewTag } = useArticleCard(props.articleID);
</script>

<style scoped>
    @import "../../styles/article-card/article-card.css";
</style>