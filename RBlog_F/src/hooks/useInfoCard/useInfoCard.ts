import { ref, onMounted } from 'vue'
import axios from 'axios'

export default function useInfoCard() {
    let nickname = ref('')
    let personalSignature = ref('')
    let articleCount = ref(0)
    let categoryCount = ref(0)
    let tagCount = ref(0)
    async function getInfo() {
    try {
        let result = await axios.get('http://127.0.0.1:4523/m1/5985264-5673651-default/api/infoCard')
        let info = result.data
        nickname.value = info.nickname
        personalSignature.value = info.personalSignature
        articleCount.value = info.articleCount
        categoryCount.value = info.categoryCount
        tagCount.value = info.tagCount
    } catch (error) {
        alert(error)
    }
    }
    onMounted(() => {
        getInfo()
    })
    return {
        nickname,
        personalSignature,
        articleCount,
        categoryCount,
        tagCount
    }
}
