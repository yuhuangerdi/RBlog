<template>
    <div class="side-card">
        <div class="famous-saying">
            今日金句
            <hr>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ sideCardData?.saying }}</p>
        </div>
        <div class="calendar-img">
            <img :src="getImgUrl()" alt="calendar" class="calendar-img-pic"></img>
        </div>
        <div class="statistics">
            <p>{{ year }}年已过去：</p>
            <el-progress :percentage="getDayPercent()"></el-progress>
            <hr>
            <p class="operation-days" :data-value="sideCardData?.operationDays">已运行：</p>
            <p class="visitor-count" :data-value="sideCardData?.visitorCount">访客总量：</p>
            <p class="reading-count" :data-value="sideCardData?.readingCount">阅读数：</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "SideCard"
}
</script>
    
<script lang="ts" setup>
    import useSideCard from '../../hooks/useSideCard/useSideCard';
    const { year, sideCardData, getImgUrl, getDayPercent } = useSideCard();
</script>

<style scoped>
    @import "../../styles/side-crad/side-card.css";
</style>