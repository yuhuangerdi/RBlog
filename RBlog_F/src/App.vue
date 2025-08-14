<template>
    <GoTop></GoTop>
    <div></div>
</template>

<script lang="ts">
    export default {
        name: 'App'
    }
</script>

<script setup lang="ts">
    import GoTop from './components/GoTop/GoTop.vue';
</script>

<style scoped>
    div{
        width: 100px;
        height: 3000px;
        background-color: rgb(0, 140, 255);
    }
</style>
