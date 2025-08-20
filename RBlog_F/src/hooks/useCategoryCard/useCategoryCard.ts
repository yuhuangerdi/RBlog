import router from "@/router";


export default function(name: string) {
    function jumpToSignal() {
        router.push(`/article/category/signal`)
    }
    return {
        jumpToSignal,
    }
}