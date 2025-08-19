<template>
    <div class="footer">
        <div class="pic-container"> <img src="../../assets/LOGO_R.png" alt=""> </div>
        <div class="text-container">
            <div class="EN-copyright">
                <p>copyright: © 2025 Ryan. All rights reserved.</p>
            </div>
            <div class="CN-copyright">
                <p>Ryan 版权所有</p>
            </div>
            <div class="powered-by">
                <p>powered by: Vue.js</p>
            </div>
            <div class="license" @click="alertCC">
                <p>知识共享许可协议：CC-BY-NC-SA</p>
            </div>
            <div>
                <p>备案号：</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Footer"
    }
</script>

<script lang="ts" setup>
    import useFooter from "../../hooks/useFooter/useFooter"
    let { alertCC } = useFooter()
</script>

<style scoped>
    @import "../../styles/footer/footer.css";
</style>