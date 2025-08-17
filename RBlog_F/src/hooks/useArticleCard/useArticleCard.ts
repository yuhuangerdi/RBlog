import { onMounted, ref } from "vue";
import { type ArticleCardDataInter } from "../../types";
import axios from "axios";
import { ar } from "element-plus/es/locales.mjs";

export default function(articleID:number){
    let articleInfo = ref<ArticleCardDataInter | null>(null);
    async function getArticleInfo() {
        try {
            let result = await axios.get(`http://127.0.0.1:4523/m1/5985264-5673651-default/api/ArticleCardData/${articleID}`)
            articleInfo.value = result.data
            console.log(articleInfo.value);
        } 
        catch (error) {
            alert(error)
        }
    }

    onMounted(() => {
        getArticleInfo();
    });

    function view(id:string){}

    return {
        articleInfo,
        view    
    }
}