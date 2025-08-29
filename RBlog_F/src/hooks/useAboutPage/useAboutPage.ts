import { ref } from 'vue'
import axios from 'axios'
import MarkdownIt from 'markdown-it'

export default function () {
  let aboutArticles = ref()
  const loading = ref(false)

  // 创建 markdown 解析器实例
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  })

  async function fetchAboutArticles() {
    loading.value = true
    try {
      // TODO: Replace with actual API endpoint
      // const response = await axios.get('/api/about/aboutArticles')
      // aboutArticles.value = response.data
      
      // Mock data
      let aboutArticlesResult = await axios.get('/api/about/articleData')
      
      // 对获取的数据进行 markdown 解析
      if (aboutArticlesResult.data.data) {
        aboutArticles.value = aboutArticlesResult.data.data.map((article: any) => ({
          ...article,
          content: md.render(article.content || '')
        }))
      } else {
        aboutArticles.value = aboutArticlesResult.data.data;
      }
    }
    finally {
      loading.value = false
    }
  }

  return {
    aboutArticles,
    loading,
    fetchAboutArticles
  }
}
