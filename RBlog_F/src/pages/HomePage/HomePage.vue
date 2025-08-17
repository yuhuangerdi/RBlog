<template>
    <div class="home-page">
        <div class="aside-container container">
            <InfoCard></InfoCard>
        </div>
        <div class="main-container container">
            <ArticleCard v-for="arti in homeArticleID" :key="arti" :articleID="arti"></ArticleCard>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "HomePage"
}
</script>

<script lang="ts" setup>
    import InfoCard from '../../components/InfoCard/InfoCard.vue';
    import ArticleCard from '../../components/ArticleCard/ArticleCard.vue';
    import useHomePage from '../../hooks/useHomePage/useHomePage';
    const { homeArticleID } = useHomePage();
</script>

<style scoped>
    @import "../../styles/home-page/home-page.css";
</style>
