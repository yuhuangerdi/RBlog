<template>
    <div class="topNavigateBar">
        <div class="LogoContainer"><img src="../../assets/LOGO.png" alt="" class="Logo"></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/home">首页</router-link></div>
        <div class="MenuContainer article-dropdown-container" @mouseenter="toggleArticleDropdown"
            @mouseleave="closeDropdown">
            <router-link class="MenuLink article-link" to="/article">文章</router-link>
            <!-- 下拉菜单 -->
            <div class="article-dropdown" :class="{ 'show': showArticleDropdown }">
                <div>
                    <!-- 前四个动态项 -->
                    <router-link v-for="(item, index) in articleItems" :key="index" :to="`/article?category=${item}`"
                        class="dropdown-item" @click="closeDropdown">
                        {{ item }}
                    </router-link>
                    <router-link to="/article" class="dropdown-item more-item" @click="closeDropdown">
                        更多
                    </router-link>
                </div>
            </div>
        </div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/feeling">碎碎念</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/archive">归档</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/about">关于</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/message">留言</router-link></div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "TopNavigateBar"
    }
</script>

<script lang="ts" setup>
    import { RouterLink } from 'vue-router';
    import useTopNavigateBar from '../../hooks/useTopNavigateBar/useTopNavigateBar';

    // 引入逻辑
    const {
        showArticleDropdown,
        articleItems,   
        toggleArticleDropdown,
        closeDropdown
    } = useTopNavigateBar();
</script>

<style scoped>
    @import "../../styles/top-navigate-bar/top-navigate-bar.css";
</style>