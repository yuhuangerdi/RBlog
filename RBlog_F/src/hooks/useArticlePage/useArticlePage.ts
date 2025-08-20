import axios from 'axios';
import { onBeforeMount, ref } from 'vue'
export default function () {
    let content = ref();

    async function getAriticlePageContent() {
        let articlePageContentResult = await axios.get('http://127.0.0.1:4523/m1/5985264-5673651-default/api/PageBannerContent');
        content.value = articlePageContentResult.data.articlePage;
    }

    onBeforeMount(()=>{
        getAriticlePageContent();
    })

    return {    
        content
    }
}
