<template>
    <div class="message-scroll-page">
        <div class="message-cards-container">
            <MessageCard></MessageCard>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "MessageScrollPage"
    }
</script>

<script lang="ts" setup>
    import MessageCard from '@/components/MessageCard/MessageCard.vue';
</script>

<style scoped>
    @import "../../../styles/message-page/message-scroll-page/message-scroll-page.css";
</style>