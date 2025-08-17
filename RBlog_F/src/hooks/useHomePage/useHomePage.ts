import axios from "axios";
import { onMounted, ref } from "vue";

export default function() {
    let homeArticleID = ref([]);
    async function getHomeArticleID() {
        let result = await axios.get("http://127.0.0.1:4523/m2/5985264-5673651-default/337094423");
        homeArticleID.value = result.data.homeArticleID;
    }
    onMounted(()=>{
        getHomeArticleID();
    })
    return {
        homeArticleID
    }
}