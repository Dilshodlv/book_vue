import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useAddFile = defineStore(
    "add-file", () => {

        function addFile(data){
            let file = new FormData()
            file.append('file', data)

            return new Promise((resolve,reject) =>{
                client.post('media-objects', file)
                    .then((res) => {
                        console.log('Fayl muvaffaqiyatli yuklandi')
                        resolve(res)
                    })
                    .catch(() => {
                        console.log('Fayl yuklanishda xatolik')
                        reject()
                    })
            })
        }
        return {addFile}
    })