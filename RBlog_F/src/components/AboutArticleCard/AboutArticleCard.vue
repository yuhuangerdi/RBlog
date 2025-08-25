<template>
  <div class="about-article-card">
    <div class="about-article-header">
      <h3 class="about-article-title">{{ article.title }}</h3>
      <span class="about-article-date">{{ article.date }}</span>
    </div>
    <div class="about-article-content" v-html="article.content"></div>
    <div class="article-divider"></div>
  </div>
</template>

<script lang="ts">
    export default {
        name: 'AboutArticleCard',
    }
</script>

<script lang="ts" setup>
    import { defineProps } from 'vue'
    defineProps({
        article: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>
    @import "../../styles/about-article-card/about-article-card.css";
</style>