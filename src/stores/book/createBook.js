import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useCreateBook = defineStore(
    'create-book', () => {

        function createBook(data) {
            return new Promise((resolve, reject) => {
                client.post('books', data)
                    .then((res) => {
                        console.log('Kitob muvaffaqiyatli yaratildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitob qoshishda xatolik')
                        reject()
                    })
            })
        }

        return {createBook}
    })