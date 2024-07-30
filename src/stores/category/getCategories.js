import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {reactive} from "vue";


export const useFetchCategories = defineStore(
    'fetchCategories', () => {

        const state = reactive({
            categories: [],
            count: 0
        })
        function categoriesGet() {
            return new Promise((resolve, reject) => {
                client.get('categories')
                    .then((res) => {
                        console.log('Kategoriya muvaffaqiyatli olindi')
                        state.categories = res.data['hydra:member']
                        state.count = res.data['hydra:totalItems']
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kategoriya olinishda xatolik')
                        reject()
                    })
            })
        }

        return {categoriesGet, state}
    })