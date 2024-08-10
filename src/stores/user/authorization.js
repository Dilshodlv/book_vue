import {defineStore} from "pinia";
import axios from "axios";

export const userAuthorization = defineStore(
    "authorization", () => {

        function userAuth(data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8507/api/users/auth', data)
                    .then((res) => {
                        console.log('Token muvaffaqiyatli olindi')
                        localStorage.setItem('token', res.data.token)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('token olishda xatolik')
                        console.log(error)
                        reject()
                    })
            })
        }

        return {userAuth}
    })