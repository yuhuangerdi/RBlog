import { onMounted } from 'vue'
export default function () {
    onMounted(() => {
    // 监听滚动，当滚动超过50px时给hero-section添加scrolled类
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.hero-section')
            if (hero) {
                hero.classList.toggle('scrolled', window.scrollY > 50)
            }
        })
    })
}
