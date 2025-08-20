<template>
  <div class="category-card-list">
    <!-- 循环渲染多个卡片 -->
    <CategoryCard
      v-for="(item, index) in categories" 
      :key="index" 
      :category="item" 
    />
  </div>
</template>

<script lang="ts">
    export default {
        name: 'CategoryAll',
    }
</script>

<script lang="ts" setup>
    import useCategoryAll from '../../../hooks/useArticlePage/useCategoryAll/useCategoryAll';

    const { categories } = useCategoryAll();
</script>

<style scoped>
    @import "../../../styles/article-page/category-all/category-all.css";
</style>