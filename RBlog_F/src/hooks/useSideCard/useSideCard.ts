import { onMounted, ref } from "vue";
import { type SideCardDataInter } from "@/types";
import axios from "axios";

export default function(){
    const today = new Date();
    const year = today.getFullYear();
    let sideCardData = ref<SideCardDataInter | null>(null);

    function getImgUrl(){
        const today = new Date();
        const dayIndex = today.getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const todayName = daysOfWeek[dayIndex];
        return new URL(`../../assets/calendar/${todayName}.png`, import.meta.url).href;
    }
    function getDayPercent() {
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        const daysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let dayOfYear = 0;
        for (let i = 0; i < month - 1; i++) {
            dayOfYear += daysInMonth[i];
        }
        dayOfYear += day;
        return (dayOfYear/(isLeap? 366 : 365) * 100).toFixed(2);
    }
    async function getSideCardData(){
        let sideCardDataResult = await axios.get("http://127.0.0.1:4523/m1/5985264-5673651-default/api/SideCard");
        sideCardData.value = sideCardDataResult.data;
    }

    onMounted(() => {
        getSideCardData();
    });

    return {
        year,
        sideCardData,
        getImgUrl,
        getDayPercent
    }
}