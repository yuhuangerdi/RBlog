<template>
    <div class="info-card">
        <img src="../../assets/LOGO_R.png" alt="" class="avatar">
        <p class="nickname">{{ nickname }}</p>
        <p class="personal-signature">{{ personalSignature }}</p>
        <div class="basic-info">
            <p class="article-count">文章<br>&nbsp{{ articleCount }}</p>
            <p class="category-count">分类<br>&nbsp{{ categoryCount }}</p>
            <p class="tag-count">标签<br>&nbsp{{ tagCount }}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "InfoCard"
}
</script>
    
<script lang="ts" setup>
    import useInfoCard from "../../hooks/useInfoCard/useInfoCard";
    const { nickname, personalSignature, articleCount, categoryCount, tagCount } = useInfoCard();
</script>

<style scoped>
    @import "../../styles/info-card/info-card.css"
</style>