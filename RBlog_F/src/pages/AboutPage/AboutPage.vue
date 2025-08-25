<template>
  <div class="about-page">
    <h1 class="about-title">关于</h1>
    <div class="about-content">
      <div v-if="loading" class="loading">
        <div class="loader"></div>
        <span>加载中...</span>
      </div>
      <div v-else class="about-aboutArticles">
        <AboutArticleCard 
          v-for="(article, index) in aboutArticles" 
          :key="article.id"
          :article="article"
          :style="{ animationDelay: `${index * 0.1}s` }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" > 
    export default {
        name: 'AboutPage'
    }
</script>

<script lang="ts" setup>
    import { onMounted } from 'vue'
    import AboutArticleCard from '../../components/AboutArticleCard/AboutArticleCard.vue'
    import useAboutPage from '@/hooks/useAboutPage/useAboutPage'

    const { aboutArticles, loading, fetchAboutArticles } = useAboutPage()

    onMounted(() => {
        fetchAboutArticles()
    })
</script>

<style scoped>
    @import "../../styles/about-page/about-page.css";
</style>