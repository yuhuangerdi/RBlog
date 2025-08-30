import axios from 'axios'
import { onBeforeMount, ref, watch } from 'vue'

export default function () {
  let commentCount = ref(0)
  let nowPage = ref(1)
  let nowMessageArray = ref([])

  async function getCommentCount() {
    try {
      let commentCountResult = await axios.get('/api/message/comments/count')
      commentCount.value = commentCountResult.data
    } catch (error) {
      console.error('获取留言总数失败:', error)
      commentCount.value = 0
    }
  }

  async function getNowPageMessageArray() {
    try {
      let nowPageMessageArrayResult = await axios.get(
        `/api/message/comments/content/${nowPage.value}`,
      )
      console.log('当前页留言API响应:', nowPageMessageArrayResult.data)
      nowMessageArray.value = nowPageMessageArrayResult.data.comments
      console.log('设置的nowMessageArray:', nowMessageArray.value)
    } catch (error) {
      console.error('获取当前页留言失败:', error)
      nowMessageArray.value = []
    }
  }

  watch(nowPage, (newPage, oldPage) => {
    if (newPage !== oldPage) {
      getNowPageMessageArray()
      // 滚动到页面顶部
      const scrollPosition = window.innerHeight * 0.45
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      })
    }
  })

  onBeforeMount(() => {
    getCommentCount()
    getNowPageMessageArray()
  })

  return {
    commentCount,
    nowPage,
    nowMessageArray,
  }
}
