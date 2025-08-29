import axios from "axios";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default function() {
    let route =useRoute();
    let articleCount = ref();
    let nowPage = ref(1);
    let nowArticleIdArray = ref([]);

    async function getArticleCount() {
        let articleCountResult =await axios.get(`/api/category/signalCategory/count?search=${route.query.search}`);
        articleCount.value = articleCountResult.data.sum;
    }

    async function getNowPageArticleIdArray(){
        let NowPageArticleIdArrayResult = await axios.post(
            "/api/category/signalCategory/ids",
            {
                search:route.query.search,
                page:nowPage.value
            });
        nowArticleIdArray.value = NowPageArticleIdArrayResult.data.id;
    }

    watch(nowPage,()=>{
        getNowPageArticleIdArray();
        const scrollPosition = window.innerHeight * 0.45;
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    })

    onBeforeMount(()=>{
        getArticleCount();
        getNowPageArticleIdArray();
    })

    return{
        articleCount,
        nowPage,
        nowArticleIdArray
    }
}