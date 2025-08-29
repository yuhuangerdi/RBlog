import axios from 'axios';
import { onBeforeMount, ref } from 'vue'

export default function () {
    let content = ref({
        contentCN: '留言板',
        contentEN: 'Message Board'
    });

    async function getMessagePageContent() {
        try {
            let messagePageContentResult = await axios.get('/api/other/pageBannerContent');
            if (messagePageContentResult.data && messagePageContentResult.data.messagePage) {
                content.value = messagePageContentResult.data.messagePage;
            }
        } catch (error) {
            console.error('获取消息页面内容失败:', error);
            // 使用默认内容作为备选
            content.value = {
                contentCN: '留言板',
                contentEN: 'Message Board'
            };
        }
    }

    onBeforeMount(() => {
        getMessagePageContent();
    })

    return {    
        content
    }
}