import { onMounted, ref } from "vue";
import { type ArticleCardDataInter } from "../../types";
import axios from "axios";
import router from "@/router";

export default function(articleID:number){
    let articleInfo = ref<ArticleCardDataInter | null>(null);
    
    async function getArticleInfo() {
        try {
            let articleInfoResult = await axios.get(`http://127.0.0.1:4523/m1/5985264-5673651-default/api/ArticleCardData/${articleID}`)
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
        alert("Tag");
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