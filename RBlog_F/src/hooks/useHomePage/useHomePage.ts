import axios from 'axios';
import { onBeforeMount, onMounted, ref } from 'vue'
export default function () {
    let content = ref();

    async function getHomePageContent() {
        let homePageContentResult = await axios.get('http://127.0.0.1:4523/m1/5985264-5673651-default/api/PageBannerContent');
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
