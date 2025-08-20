<template>
    <div class="category-card" @click="jumpToSignal">
        <!-- 左侧：Logo + 名称（垂直排列） -->
        <div class="card-left">
        <div class="card-logo">
            <img :src="props.category.imgPath" :alt="category.name" class="logo-img">
        </div>
        <h3 class="card-name">{{ props.category.name }}</h3>
        </div>
        
        <!-- 右侧：简介（占剩余空间） -->
        <p class="card-desc">{{ props.category.description }}</p>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'CategoryCard',
    }
</script>

<script lang="ts" setup>
    import useCategoryCard from '../../hooks/useCategoryCard/useCategoryCard';
    import { defineProps } from 'vue';
    const props = defineProps(["category"]);
    const { jumpToSignal } = useCategoryCard(props.category.name);
</script>

<style scoped>
    @import "../../styles/category-card/category-card.css";
</style>