<template>
    <div class="topNavigateBar">
        <div class="LogoContainer"><img src="../../assets/LOGO.png" alt="" class="Logo"></div>
        
        <!-- 桌面端菜单 -->
        <div class="MenuContainer"><router-link class="MenuLink" to="/home">首页</router-link></div>
        <div class="MenuContainer article-dropdown-container" @mouseenter="toggleArticleDropdown"
            @mouseleave="closeDropdown">
            <router-link class="MenuLink article-link" to="/article">文章</router-link>
            <!-- 下拉菜单 -->
            <div class="article-dropdown" :class="{ 'show': showArticleDropdown }">
                <div>
                    <!-- 前四个动态项 -->
                    <router-link v-for="(item, index) in articleItems" :key="index" :to="`/article/category/signal?search=${item}`"
                        class="dropdown-item" @click="closeDropdown">
                        {{ item }}
                    </router-link>
                    <router-link to="/article/category/all" class="dropdown-item more-item" @click="closeDropdown">
                        更多
                    </router-link>
                </div>
            </div>
        </div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/feeling">碎碎念</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/archiving">归档</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/message">留言</router-link></div>
        <div class="MenuContainer"><router-link class="MenuLink" to="/about">关于</router-link></div>

        <!-- 移动端汉堡菜单按钮 -->
        <button class="hamburger-menu" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- 移动端菜单面板 -->
        <div class="mobile-menu-panel" :class="{ 'active': isMobileMenuOpen }">
            <router-link class="mobile-menu-item" to="/home" @click="closeMobileMenu">首页</router-link>
            <div class="mobile-menu-item" @click="toggleMobileArticleDropdown">文章</div>
            <div class="mobile-dropdown" v-if="showMobileArticleDropdown">
                <router-link v-for="(item, index) in articleItems" :key="index"
                    :to="`/article/category/signal?search=${item}`" class="mobile-dropdown-item" @click="closeMobileMenu">
                    {{ item }}
                </router-link>
                <router-link to="/article/category/all" class="mobile-dropdown-item" @click="closeMobileMenu">
                    更多
                </router-link>
            </div>
            <router-link class="mobile-menu-item" to="/feeling" @click="closeMobileMenu">碎碎念</router-link>
            <router-link class="mobile-menu-item" to="/archiving" @click="closeMobileMenu">归档</router-link>
            <router-link class="mobile-menu-item" to="/message" @click="closeMobileMenu">留言</router-link>
            <router-link class="mobile-menu-item" to="/about" @click="closeMobileMenu">关于</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "TopNavigateBar"
    }
</script>

<script lang="ts" setup>
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';
    import useTopNavigateBar from '../../hooks/useTopNavigateBar/useTopNavigateBar';

    // 引入逻辑
    const {
        showArticleDropdown,
        articleItems,
        toggleArticleDropdown,
        closeDropdown
    } = useTopNavigateBar();

    // 移动端菜单状态
    const isMobileMenuOpen = ref(false);
    const showMobileArticleDropdown = ref(false);

    // 切换移动端菜单
    const toggleMobileMenu = () => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
        // 关闭移动端文章下拉菜单
        if (!isMobileMenuOpen.value) {
            showMobileArticleDropdown.value = false;
        }
    };

    // 关闭移动端菜单
    const closeMobileMenu = () => {
        isMobileMenuOpen.value = false;
        showMobileArticleDropdown.value = false;
    };

    // 切换移动端文章下拉菜单
    const toggleMobileArticleDropdown = () => {
        showMobileArticleDropdown.value = !showMobileArticleDropdown.value;
    };
</script>

<style scoped>
    @import "../../styles/top-navigate-bar/top-navigate-bar.css";
</style>