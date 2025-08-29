import { onMounted, ref } from "vue";
import axios from "axios";
import { type CategoriesDataInter } from "@/types";

export default function(){
    let categories = ref<CategoriesDataInter[]>([]);

    async function getCategories(){
        let categoriesResult = await axios.get("/api/category/allCategories");
        categories.value = categoriesResult.data.data;
    }

    onMounted(()=>{
        getCategories();
    })

    return {
        categories
    }
}