<template>
    <div class="load-more-container">
        <el-skeleton v-if="props.loading" class="loading-skeleton" :rows="3" animated />
        <p v-if="props.noMore" class="no-more-text">没有更多文章了</p>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'ArticleLoadMore',
    }
</script>

<script lang="ts" setup>
    import { ElSkeleton } from 'element-plus'
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps({
        loading: {
            type: Boolean,
            default: false
        },
        noMore: {
            type: Boolean,
            default: false
        }
    })
</script>

<style scoped>
    @import "../../styles/load-more/load-more.css";
</style>