<template>
    <div>
        <GoTop></GoTop>
        <TopNavigateBar></TopNavigateBar>
        <div class="router-container">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
    
</template>

<script lang="ts">
    export default {
        name: 'App'
    }
</script>

<script setup lang="ts">
    import GoTop from './components/GoTop/GoTop.vue';
    import TopNavigateBar from './components/TopNavigateBar/TopNavigateBar.vue';
    import Footer from './components/Footer/Footer.vue';
</script>

<style scoped>
    .router-container {
        width: 100%;
        height: 100%;
        background-color: rgb(0, 140, 255);
        margin-top: 0;
    }
</style>
