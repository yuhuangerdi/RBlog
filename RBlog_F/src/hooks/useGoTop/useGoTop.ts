import { ref, onMounted, nextTick } from "vue";

export default function() {
    let isShow = ref(false);
    
    function goTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        isShow.value = false
    }
    function needToShow(){
        let currHeight = ref(document.documentElement.scrollTop || document.body.scrollTop);
        if(currHeight.value > 400){
            isShow.value = true
        }
        else{
            isShow.value = false
        }
    }

    onMounted(()=>{
        nextTick(()=>{      // DOM发生变化时
            window.addEventListener('scroll', needToShow);      // 监听滚动事件，实时更新isShow的值
        })
    })
    
    return {goTop, isShow}
}