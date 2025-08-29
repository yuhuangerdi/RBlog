import axios from 'axios';
import { onBeforeMount, ref } from 'vue'
export default function () {
    let content = ref();

    async function getAriticlePageContent() {
        let articlePageContentResult = await axios.get('/api/other/pageBannerContent');
        content.value = articlePageContentResult.data.articlePage;
    }

    onBeforeMount(()=>{
        getAriticlePageContent();
    })

    return {    
        content
    }
}
