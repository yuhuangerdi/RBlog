<template>
    <div class="message-scroll-page">
        <div class="message-cards-container">
            <MessageCard :messages="nowMessageArray"></MessageCard>
        </div>
        <div class="pagination-block">
            <el-pagination layout="prev, pager, next" :total="commentCount" v-model:current-page="nowPage"/>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "MessageScrollPage"
    }
</script>

<script lang="ts" setup>
    import MessageCard from '@/components/MessageCard/MessageCard.vue';
    import useMessageScrollPage from "../../../hooks/useMessagePage/useMessageScrollPage/useMessageScrollPage.ts"
    const { commentCount, nowPage, nowMessageArray } = useMessageScrollPage()
</script>

<style scoped>
    @import "../../../styles/message-page/message-scroll-page/message-scroll-page.css";
</style>