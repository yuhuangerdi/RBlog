import { ref } from 'vue'
import axios from 'axios'

export default function () {
  let aboutArticles = ref()
  const loading = ref(false)

  async function fetchAboutArticles() {
    loading.value = true
    try {
      // TODO: Replace with actual API endpoint
      // const response = await axios.get('/api/about/aboutArticles')
      // aboutArticles.value = response.data
      
      // Mock data
      let aboutArticlesResult = await axios.get('http://127.0.0.1:4523/m1/5985264-5673651-default/api/AboutData')
      aboutArticles.value = aboutArticlesResult.data;
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
