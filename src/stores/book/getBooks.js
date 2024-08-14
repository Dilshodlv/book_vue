import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";


export const useFetchBooks = defineStore(
    'fetchBooks', () => {

        const state = reactive({
            books: [],
            count: 0
        })

        function booksGet(url = '') {
            return new Promise((resolve, reject) => {
                client.get('books' + url)
                    .then((res) => {
                        console.log('Kitoblar muvaffaqiyatli olindi')
                        state.books = res.data['hydra:member']
                        state.count = res.data['hydra:totalItems']
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitob olinishda xatolik')
                        reject()
                    })
            })
        }
        return{booksGet, state}
    })