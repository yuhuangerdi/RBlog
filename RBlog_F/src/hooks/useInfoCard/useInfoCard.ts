import { ref, onMounted } from 'vue'
import { type InfoCardDataInter } from '@/types'
import axios from 'axios'

export default function useInfoCard() {
    let Info = ref<InfoCardDataInter | null>(null)

    async function getInfo() {
        try {
            //let infoCardResult = await axios.get('/api/user/admin/infoCard')
            let infoCardResult = await axios.get('/api/users/admin/infoCard')
            Info.value = infoCardResult.data
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
