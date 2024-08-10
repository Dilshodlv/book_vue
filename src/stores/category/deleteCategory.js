import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useDeleteCategories = defineStore(
    'deleteCategories', () => {

        function categoriesDelete(id) {
            return new Promise((resolve, reject) => {
                client.delete('categories/' + id)
                    .then((res) => {
                        console.log('Kategoriya muvaffaqiyatli ochirildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kategoriya ochirishda xatolik')
                        reject()
                    })
            })
        }

        return {categoriesDelete}
    })