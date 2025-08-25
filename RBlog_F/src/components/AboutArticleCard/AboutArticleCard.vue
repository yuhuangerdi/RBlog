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
.about-article-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);
  opacity: 0;
  transform: translateY(20px);
  animation: cardFadeIn 0.6s ease forwards;
  position: relative;
  overflow: hidden;
}

@keyframes cardFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-article-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.about-article-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.05);
}

.about-article-title {
  margin: 0 0 0.8rem 0;
  color: var(--el-text-color-primary);
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  transition: color 0.3s ease;
}

.about-article-card:hover .about-article-title {
  color: var(--el-color-primary);
}

.about-article-date {
  font-size: 0.875rem;
  color: var(--el-text-color-secondary);
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.about-article-content {
  color: var(--el-text-color-regular);
  line-height: 1.9;
  padding: 0.5rem;
  font-size: 1.05rem;
}

.about-article-content p {
  margin-bottom: 1.8rem;
  color: var(--el-text-color-regular);
  transition: color 0.2s ease;
}

.about-article-card:hover .about-article-content p {
  color: #333;
}

.about-article-content img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 2rem auto;
  display: block;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.about-article-content img:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.article-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);
  margin-top: 2rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .about-article-card {
    padding: 1.8rem 1.5rem;
    border-radius: 12px;
  }
  
  .about-article-content {
    font-size: 1rem;
    line-height: 1.8;
  }
  
  .about-article-content img {
    margin: 1.5rem auto;
    border-radius: 8px;
  }
}
</style>