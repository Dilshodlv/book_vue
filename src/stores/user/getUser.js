import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {reactive} from "vue";

export const useFetchUsers = defineStore(
    "fetchUsers", () => {
        const state = reactive({
            users: [],
            totalItems:0,
            pageCount: 0

        })


        function usersGet(url) {
            return new Promise((resolve, reject) => {
                client.get('users' + url)
                    .then((res) => {
                        console.log('Foydalanuvchilar muvaffaqiyatli olindi')
                        state.users = res.data['hydra:member']
                        state.totalItems = res.data['hydra:totalItems']
                        state.pageCount = Math.ceil(state.totalItems / 5)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('token olishda xatolik')
                        console.log(error)
                        reject()
                    })
            })
        }

        return {usersGet,state}
    })