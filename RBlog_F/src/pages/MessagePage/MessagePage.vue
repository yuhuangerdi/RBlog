<template>
    <div class="message-page">
        <!-- 横幅 -->
        <div class="message-banner">
            <div class="banner-content">
                <h1 class="chinese-text">{{ content.contentCN }}</h1>
                <p class="english-text">{{ content.contentEN }}</p>
            </div>
        </div>
        
        <div class="aside-container container">
            <SideCard></SideCard>
        </div>
        <div class="main-container container">
            <MessageScrollPage></MessageScrollPage>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "MessagePage"
    }
</script>

<script lang="ts" setup>
    import SideCard from '@/components/SideCard/SideCard.vue';
    import useMessagePage from '../../hooks/useMessagePage/useMessagePage';
    import MessageScrollPage from './MessageScrollPage/MessageScrollPage.vue';

    const { content } = useMessagePage();
</script>

<style scoped>
    @import "../../styles/message-page/message-page.css";
</style>