<template>
    <div>
        <GoTop></GoTop>
        <TopNavigateBar class="top-navigate-bar"></TopNavigateBar>
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
        height: 100%;
        margin-top: 0;
        margin: 0;
        padding: 0;
    }
</style>
