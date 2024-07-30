import {defineStore} from 'pinia'
import {client} from "@/plugins/axios.js";

export const useAuthorization = defineStore(
    'authorization', () => {
        function userAuth(data) {
            return new Promise((resolve, reject) => {
                client.post('users/auth', data)
                    .then((res) => {
                        console.log('Token muvaffaqiyatli olindi')
                        localStorage.setItem('token', res.data.token)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Token olinishda xatolik')
                        console.log(error)
                        reject()
                    })
            })
        }
        return {userAuth}
    })
