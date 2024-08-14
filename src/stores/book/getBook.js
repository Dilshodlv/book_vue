import {reactive} from "vue";
import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useFetchbook = defineStore(
    "fetchBook",() => {

        const state = reactive({
            name: '',
            text: ''
        })

        function booksGet(id) {
            return new Promise((resolve, reject) => {
                client.get('books/' + id)
                    .then((res) => {
                        console.log('Kitob muvaffaqiyatli olindi')
                        state.name = res.data.name
                        state.text = res.data.text
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitobni olishda xatolik')
                        reject()
                    })
            })
        }
        return {booksGet,state}
    })