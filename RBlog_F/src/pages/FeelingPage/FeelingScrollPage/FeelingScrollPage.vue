<template>
    <div class = "category-signal">
        <FeelingCard v-for="feelingId in nowFeelingIdArray" :key="feelingId" :feelingId="feelingId"></FeelingCard>
        <div class="pagination-block">
            <el-pagination layout="prev, pager, next" :total="feelingCount" v-model:current-page="nowPage"/>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name:"FeelingScrollPage"
    }
</script>

<script lang="ts" setup>
    import useFeelingScrollPage from "../../../hooks/useFeelingPage/useFeelingScrollPage/useFeelingScrollPage.ts"
    import FeelingCard from "@/components/FeelingCard/FeelingCard.vue";
    const { feelingCount, nowPage, nowFeelingIdArray } = useFeelingScrollPage()
</script>

<style scoped>
    @import "../../../styles/feeling-page/feeling-scroll-page/feeling-scroll-page.css";
</style>
