<template>
  <div class="read-page">
    <div class="aside-container">
      <CatalogueCard :headings="headings" />
    </div>
    <div class="main-container">
      <ReadScrollPage 
        :articleContent="articleContent" 
        @headings-updated="handleHeadingsUpdated"
        v-if="articleContent"
      />
      <div v-else class="loading-container">
        <p>加载中...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    export default {
        name: 'ReadPage',
    }
</script>

<script lang="ts" setup>
    import ReadScrollPage from '../../components/ReadScrollPage/ReadScrollPage.vue';
    import CatalogueCard from '../..//components/CatalogueCard/CatalogueCard.vue';
    import useReadPage from '../../hooks/useReadPage/useReadPage';

    const {articleContent,headings,handleHeadingsUpdated} = useReadPage();
</script>

<style scoped>
    @import '../../styles/read-page/read-page.css';
</style>