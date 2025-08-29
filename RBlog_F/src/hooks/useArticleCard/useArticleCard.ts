import { onMounted, ref } from "vue";
import { type ArticleCardDataInter } from "../../types";
import axios from "axios";
import router from "@/router";

export default function(articleID:number){
    let articleInfo = ref<ArticleCardDataInter | null>(null);
    
    async function getArticleInfo() {
        try {
            let articleInfoResult = await axios.get(`/api/article/articleCard/${articleID}`)
            articleInfo.value = articleInfoResult.data;
        } 
        catch (error) {
            alert(error);
        }
    }
    function view(id:string){
        router.push(`/reading?id=${id}`);
    }
    function viewTag(){
        router.push(`/article/category/signal?search=${articleInfo.value?.tags}`);
    }

    onMounted(() => {
        getArticleInfo();
    });

    return {
        articleInfo,
        view,
        viewTag   
    }
}