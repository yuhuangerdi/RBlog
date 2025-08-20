import axios from "axios";
import { onMounted, ref } from "vue";

export default function() {
    let homeArticleID = ref<number[]>([]);
    let loading = ref(false);
    let noMore = ref(false);
    let page = ref(1); // 新增分页参数

    async function getHomeArticleID(isLoadMore = false) {
        if (loading.value) return;
        
        loading.value = true;
        
        // 模拟3秒加载延迟
        if (isLoadMore || page.value > 1) {
            await new Promise(resolve => setTimeout(resolve, 800));
        }
        
        try {
            // 假设API支持分页参数
            const homeArticleIDResult = await axios.get(
                `http://127.0.0.1:4523/m2/5985264-5673651-default/337094423?page=${page.value}`
            );
            
            const newIds = homeArticleIDResult.data.homeArticleID || [];
            
            if (isLoadMore) {        // 非第一次加载，拼接数组
                homeArticleID.value = homeArticleID.value.concat(newIds);
            } else {        // 第一次加载
                homeArticleID.value = newIds;
            }
            
            // 如果没有新数据，标记为没有更多
            if (newIds.length < 5) {
                noMore.value = true;
            } else {
                page.value++; // 只有获取到新数据才增加页码
            }
        } catch (error) {
            console.error('获取文章ID失败:', error);
        } finally {
            loading.value = false;
        }
    }
    
    // 监听滚动事件，实现滚动到底部自动加载
    function handleScroll() {
        if (loading.value || noMore.value) return;
        
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        
        // 当滚动到距离底部200px时加载更多
        if (scrollTop + clientHeight >= scrollHeight - 200) {
            getHomeArticleID(true);
        }
    }
    
    onMounted(()=>{
        getHomeArticleID();
        window.addEventListener('scroll', handleScroll);
    });

    return {
        homeArticleID,
        loading,
        noMore,
        loadMore: () => getHomeArticleID(true) // 暴露加载更多方法
    }
}