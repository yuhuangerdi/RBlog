<template>
  <div class="catalogue-card">
    <div class="card-header">
      <div class="header-content">
        <svg class="catalogue-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h3>文章目录</h3>
      </div>
      <div class="header-actions">
        <button class="action-btn" @click="toggleExpanded" :aria-expanded="isExpanded">
          <svg :class="['expand-icon', { expanded: isExpanded }]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    
    <transition name="slide-fade">
      <div v-show="isExpanded" class="catalogue-content">
        <div class="scroll-container">
          <ul class="catalogue-list">
            <li 
              v-for="heading in filteredHeadings" 
              :key="heading.id"
              :class="['catalogue-item', `level-${heading.level}`, { active: activeHeading === heading.id }]"
            >
              <a 
                :href="`#${heading.id}`" 
                @click.prevent="scrollToHeading(heading.id)"
                class="catalogue-link"
              >
                <span class="link-text">{{ heading.text }}</span>
                <span class="link-indicator"></span>
              </a>
            </li>
          </ul>
        </div>
        
        <div class="catalogue-footer">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: scrollProgress + '%' }"></div>
          </div>
          <span class="progress-text">{{ Math.round(scrollProgress) }}% 已读</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref, onMounted, onUnmounted } from 'vue';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default defineComponent({
  name: 'CatalogueCard',
  props: {
    headings: {
      type: Array as PropType<Heading[]>,
      required: true,
      default: () => []
    }
  },
  setup(props) {
    const isExpanded = ref(true);
    const activeHeading = ref('');
    const scrollProgress = ref(0);
    
    // 过滤掉"目录"标题
    const filteredHeadings = computed(() => {
      return props.headings.filter(heading => 
        !["目录", "Table of Contents"].includes(heading.text)
      );
    });

    // 切换目录展开/折叠
    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value;
    };

    // 滚动到指定标题
    const scrollToHeading = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // 设置当前活动标题
        activeHeading.value = id;
        
        // 添加高亮效果
        element.classList.add('highlighted');
        setTimeout(() => {
          element.classList.remove('highlighted');
        }, 2000);
      }
    };

    // 监听滚动，更新活动标题和阅读进度
    const handleScroll = () => {
      // 更新活动标题
      const headings = filteredHeadings.value;
      const scrollPosition = window.scrollY + 150;
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          activeHeading.value = headings[i].id;
          break;
        }
      }
      
      // 更新阅读进度
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight > 0) {
        scrollProgress.value = (window.scrollY / documentHeight) * 100;
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      // 初始计算一次
      handleScroll();
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      filteredHeadings,
      isExpanded,
      activeHeading,
      scrollProgress,
      toggleExpanded,
      scrollToHeading
    };
  }
});
</script>

<style scoped>
    @import "../../styles/catalogue-card/catalogue-card.css"
</style>