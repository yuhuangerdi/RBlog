<template>
    <div class = "go-top" @click = "goTop" v-show = "isShow">
        <i class = "arrow"><CaretTop/></i>
    </div>
</template>

<script lang="ts">
    export default {
        name:"GoTop"
    }
</script>

<script lang="ts" setup>
    import { CaretTop } from '@element-plus/icons-vue'
    import useGoTop from '../../hooks/useGoTop/useGoTop';

    const { goTop, isShow } = useGoTop();
</script>

<style scoped>
    @import "../../styles/go-top/go-top.css";
</style>