import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useCreateCategory = defineStore(
    'create-category', () => {

        function categoryCreate(data) {
            return new Promise((resolve, reject) => {
                client.post('categories', data)
                    .then((res) => {
                        console.log('Kategoriya muvaffaqiyatli qoshildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kategoriya qoshishda xatolik')
                        reject()
                    })
            })
        }

        return {categoryCreate}
    })