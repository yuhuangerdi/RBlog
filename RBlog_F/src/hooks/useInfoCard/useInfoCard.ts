import { ref, onMounted } from 'vue'
import { type InfoCardDataInter } from '@/types'
import axios from 'axios'

export default function useInfoCard() {
    let Info = ref<InfoCardDataInter | null>(null)
    async function getInfo() {
        try {
            let result = await axios.get('http://127.0.0.1:4523/m1/5985264-5673651-default/api/infoCard')
            Info.value = result.data
        } 
        catch (error) {
            alert(error)
        }
    }
    onMounted(() => {
        getInfo();
    })
    return {
        Info
    }
}
