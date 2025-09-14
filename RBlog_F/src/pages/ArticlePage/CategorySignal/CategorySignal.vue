<template>
    <div class = "category-signal">
        <ArticleCard class="article-caard" v-for="arti in nowArticleIdArray" :key="arti" :articleID="arti">{{ arti }}</ArticleCard>
        <div class="pagination-block">
            <el-pagination layout="prev, pager, next" :total="articleCount" v-model:current-page="nowPage"/>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name:"CategorySignal"
    }
</script>

<script lang="ts" setup>
    import ArticleCard from "@/components/ArticleCard/ArticleCard.vue";
    import useCategorySignal from "../../../hooks/useArticlePage/useCategorySignal/useCategorySignal.ts"
    const { articleCount, nowPage, nowArticleIdArray } = useCategorySignal()
</script>

<style scoped>
    @import "../../../styles/article-page/category-signal/category-signal.css";
</style>
