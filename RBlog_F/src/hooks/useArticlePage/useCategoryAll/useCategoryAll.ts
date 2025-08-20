import { onMounted, ref } from "vue";
import axios from "axios";
import { type CategoriesDataInter } from "@/types";

export default function(){
    let categories = ref<CategoriesDataInter[]>([]);

    async function getCategories(){
        let categoriesResult = await axios.get("http://127.0.0.1:4523/m2/5985264-5673651-default/338676943");
        categories.value = categoriesResult.data.data;
    }

    onMounted(()=>{
        getCategories();
    })

    return {
        categories
    }
}