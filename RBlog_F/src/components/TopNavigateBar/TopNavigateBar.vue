<template>
    <div class = "topNavigateBar">
        <div class="LogoContainer"><img src="../../assets/LOGO.png" alt="" class="Logo"></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/home">首页</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/article">文章</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/feeling">碎碎念</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/archive">归档</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/about">关于</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/message">留言</router-link></div>
    </div>
</template>

<script lang="ts">
    export default {
        name:"TopNavigateBar"
    }
</script>

<script lang="ts" setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    @import "../../styles/top-navigate-bar/top-navigate-bar.css";
</style>