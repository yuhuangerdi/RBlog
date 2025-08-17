<template>
    <div class="info-card">
        <img src="../../assets/LOGO_R.png" alt="" class="avatar">
        <p class="nickname">{{ Info?.nickname }} </p>
        <p class="personal-signature">{{ Info?.personalSignature }}</p>
        <div class="basic-info">
            <p class="article-count">文章<br>&nbsp{{ Info?.articleCount }}</p>
            <p class="category-count">分类<br>&nbsp{{ Info?.categoryCount }}</p>
            <p class="tag-count">标签<br>&nbsp{{ Info?.tagCount }}</p>
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
    const { Info } = useInfoCard();
</script>

<style scoped>
    @import "../../styles/info-card/info-card.css"
</style>