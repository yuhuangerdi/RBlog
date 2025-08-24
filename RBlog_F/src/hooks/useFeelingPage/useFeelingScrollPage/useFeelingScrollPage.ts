import axios from "axios";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default function() {
    let route =useRoute();
    let feelingCount = ref();
    let nowPage = ref(1);
    let nowFeelingIdArray = ref([]);

    async function getFeelingCount() {
        let feelingCountResult =await axios.get('http://127.0.0.1:4523/m1/5985264-5673651-default/api/FeelingCount');
        feelingCount.value = feelingCountResult.data.sum;
    }

    async function getNowPageFeelingIdArray(){
        let NowPageFeelingIdArrayResult = await axios.post(
            "http://127.0.0.1:4523/m1/5985264-5673651-default/api/FeelingCatalogue",{
                search:route.query.search,
                page:nowPage.value
        });
        nowFeelingIdArray.value = NowPageFeelingIdArrayResult.data.id;
    }

    watch(nowPage,()=>{
        getNowPageFeelingIdArray();
        const scrollPosition = window.innerHeight * 0.45;
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    })

    onBeforeMount(()=>{
        getFeelingCount();
        getNowPageFeelingIdArray();
    })

    return{
        feelingCount,
        nowPage,
        nowFeelingIdArray
    }
}