import { ref, onMounted } from 'vue'
import axios from 'axios'
import {type ArticleApiResponseInter} from '@/types'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

export default function () {
    const fetchArticle = async (articleId: string): Promise<string> => {
        try {
        // 设置请求超时时间
        const timeout = 5000 // 5秒超时

        // 使用Promise.race实现超时控制
        const response = await Promise.race([
            axios.get<ArticleApiResponseInter>(
            `http://127.0.0.1:4523/m1/5985264-5673651-default/api/ArticleContent?id=${articleId}`),
            new Promise<never>((_, reject) => setTimeout(() => reject(new Error('请求超时')), timeout)),
        ])

        // 检查响应状态
        if (response.status !== 200) {
            throw new Error(`API返回错误状态码: ${response.status}`)
        }

        // 验证响应数据
        if (!response.data || typeof response.data.content !== 'string') {
            throw new Error('API返回数据格式不正确')
        }

        return response.data.content
        } catch (error) {
        console.error('获取文章内容失败:', error)

        // 根据错误类型提供更具体的错误信息
        if (axios.isAxiosError(error)) {
            if (error.code === 'ECONNABORTED') {
            throw new Error('请求超时，请检查网络连接')
            } else if (error.response) {
            throw new Error(`服务器返回错误: ${error.response.status} ${error.response.statusText}`)
            } else if (error.request) {
            throw new Error('无法连接到服务器，请检查网络连接')
            }
        }

        // 如果是超时错误
        if (error instanceof Error && error.message === '请求超时') {
            throw new Error('请求超时，请稍后重试')
        }

        // 其他错误
        throw new Error('获取文章内容时发生未知错误')
        }
    }
    const articleContent = ref<string>('')
    const headings = ref<Array<{ id: string; text: string; level: number }>>([])
    const route = useRoute();
    const id = route.query.id as string;

    const loadArticle = async () => {
        try {
        const content = await fetchArticle(id)
        articleContent.value = content
        } catch (error) {
        console.error('Failed to load article:', error)
        }
    }

    const handleHeadingsUpdated = (
        newHeadings: Array<{ id: string; text: string; level: number }>,
    ) => {
        headings.value = newHeadings
    }

    watch(
    () => route.query.id,
    (id) => {
    },
    { immediate: true } // 初始加载时立即执行
    );

    onMounted(() => {
        loadArticle()
    })

    return {
        articleContent,
        headings,
        handleHeadingsUpdated,
    }
}
