<template>
    <div class="home-page">
        <div class="aside-container container">
            <InfoCard></InfoCard>
        </div>
        <div class="main-container container">

        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "HomePage"
}
</script>

<script lang="ts" setup>
    import InfoCard from '../../components/InfoCard/InfoCard.vue';
</script>

<style scoped>
    @import "../../styles/home-page/home-page.css";
</style>
