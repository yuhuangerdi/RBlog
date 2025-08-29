import axios from "axios";
import { ref, computed, onBeforeMount } from "vue";
import { type ArchivingDataInter } from "@/types";
import { ar } from "element-plus/es/locales.mjs";

export default function() {
    let articleArray = ref<ArchivingDataInter[]>([]);
    let content = ref();    
    // 提取所有有文章的月份编码（去重且响应式）
    let dateArray = computed<number[]>(() => {
        // 从ref对象中获取实际数组并提取月份，同时去重
        return [...new Set(articleArray.value.map(item => item.date))];
    });
    // 当前选中的月份编码
    const selectedDate = ref<number>(0);

    // 处理月份选择事件
    function handleSelectMonth(date: number) {
        // 滚动到顶部（带动画）
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        selectedDate.value = date;
    }
    // 根据选中的月份过滤文章列表
    const filteredArticles = computed(() => {
        const articles = articleArray.value;
        // 若有选中月份则过滤，否则显示全部
        return selectedDate.value 
            ? articles.filter(article => article.date === selectedDate.value)
            : articles;
    });
    async function getArchivingDate() {
        try {
            const archivingDateResult = await axios.get(
                "/api/archiving/idList"
            );
            articleArray.value = archivingDateResult.data.data;
            // 数据加载完成后设置默认选中最后一个月份
            if (dateArray.value.length > 0) {
                selectedDate.value = dateArray.value[dateArray.value.length - 1];
            }
        } catch (error) {
            console.error("获取归档数据失败:", error);
        }
    }
    async function getBannerContent() {
        const bannerContentResult = await axios.get(
            "/api/other/pageBannerContent"
        );
        content.value = bannerContentResult.data.archivingPage;
    }

    onBeforeMount(() => {
        getArchivingDate();
        getBannerContent();
    });

    return {
        content,
        dateArray,
        selectedDate,
        filteredArticles,
        handleSelectMonth
    };
}