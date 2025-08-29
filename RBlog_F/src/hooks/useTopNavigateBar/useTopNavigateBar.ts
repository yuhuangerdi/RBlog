import { ref, onMounted } from 'vue'
import axios from 'axios'

export default function() {
    // 文章下拉菜单相关状态
    const showArticleDropdown = ref(false)
    const articleItems = ref<string[]>([])

    // 获取文章列表数据
    async function getArticleDropdownList(){
        try {
            let articleDropdownListResult = await axios.get('/api/other/articleDropList')
            articleItems.value = articleDropdownListResult.data.articleDropdownList;
        } catch (err) {
            console.error(err)
        }
    }
    // 切换下拉菜单显示状态
    const toggleArticleDropdown = () => {
        showArticleDropdown.value = !showArticleDropdown.value
    }
    // 关闭下拉菜单
    const closeDropdown = () => {
        showArticleDropdown.value = false
    }

    // 初始化时获取数据
    onMounted(() => {
        getArticleDropdownList()
    })

    return {
        showArticleDropdown,
        articleItems,
        toggleArticleDropdown,
        closeDropdown,
        getArticleDropdownList
    }
}
