import axios from 'axios';
import { onBeforeMount, onMounted, ref } from 'vue'
export default function () {
    let content = ref();

    async function getHomePageContent() {
        let homePageContentResult = await axios.get('/api/other/pageBannerContent');
        content.value = homePageContentResult.data.homePage;
    }

    onBeforeMount(()=>{
        getHomePageContent();
    })
    onMounted(() => {
    // 监听滚动，当滚动超过50px时给hero-section添加scrolled类
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.hero-section')
            if (hero) {
                hero.classList.toggle('scrolled', window.scrollY > 50)
            }
        })
    })

    return {    
        content
    }
}
