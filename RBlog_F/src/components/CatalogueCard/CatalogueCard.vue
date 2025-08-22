<template>
  <div class="catalogue-card">
    <div class="card-header">
      <h3>目录</h3>
    </div>
    <div class="catalogue-content">
      <ul class="catalogue-list">
        <li 
          v-for="heading in filteredHeadings" 
          :key="heading.id"
          :class="['catalogue-item', `level-${heading.level}`]"
        >
          <a 
            :href="`#${heading.id}`" 
            @click.prevent="scrollToHeading(heading.id)"
            class="catalogue-link"
            :style="{ color: heading.level === 1 ? '#4a90e2' : '#000' }"
          >
            {{ heading.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue';

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
    // 过滤掉"目录"标题
    const filteredHeadings = computed(() => {
      return props.headings.filter(heading => 
        heading.text !== "目录" && heading.text !== "目录"
      );
    });

    const scrollToHeading = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        element.classList.add('highlighted');
        setTimeout(() => {
          element.classList.remove('highlighted');
        }, 2000);
      }
    };

    return {
      filteredHeadings,
      scrollToHeading
    };
  }
});
</script>

<style scoped>
    @import "../../styles/catalogue-card/catalogue-card.css";
</style>