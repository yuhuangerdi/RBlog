import axios from "axios";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default function() {
    let route =useRoute();
    let articleCount = ref();
    let nowPage = ref(1);
    let nowArticleIdArray = ref([]);

    async function getArticleCount() {
        let articleCountResult =await axios.get(`http://127.0.0.1:4523/m1/5985264-5673651-default/api/SignalCategotyArticleCount?search=${route.query.search}`);
        articleCount.value = articleCountResult.data.sum;
    }

    async function getNowPageArticleIdArray(){
        let NowPageArticleIdArrayResult = await axios.post(
            "http://127.0.0.1:4523/m1/5985264-5673651-default/api/SignalCategotyArticle",{
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