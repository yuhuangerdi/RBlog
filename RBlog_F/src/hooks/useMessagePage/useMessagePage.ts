import axios from 'axios';
import { onBeforeMount, ref } from 'vue'

export default function () {
    let content = ref({
        contentCN: '留言板',
        contentEN: 'Message Board'
    });

    async function getMessagePageContent() {
        try {
            let messagePageContentResult = await axios.get('http://127.0.0.1:4523/m1/5985264-5673651-default/api/PageBannerContent');
            // 如果API返回了消息页面的内容，使用它；否则使用默认值
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