import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useChangeCategory = defineStore(
    "changeCategory", () => {

        function categoryChange(id, data) {
            return new Promise((resolve, reject) => {
                client.put('categories/' + id, data)
                    .then((res) => {
                        console.log('Kategoriya muvaffaqiyatli ozgardi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kategoriya ozgarishda xatolik')
                        reject()
                    })
            })
        }

        return {categoryChange}
    })