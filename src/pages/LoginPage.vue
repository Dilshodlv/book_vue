<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {reactive, ref} from "vue";
import axios from 'axios';

let isLoading = ref(false);
let authorization = reactive({
    email: '',
    password: ''
});

function auth() {
    isLoading = true;
    axios.post('http://localhost:8080/api/users/auth', authorization)
        .then((res) => {
            console.log('Token muvaffqiyatli olindi')
            localStorage.setItem('token', res.data.token)
        })
        .catch((error) => {
            console.log('Token olishda xatolik')
            console.log(error)
        })
}
</script>

<template>
    <div class="row justify-content-center align-items-center vh-100">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <h1 class="text-center">Kirish</h1>
            <form>
                <FormInput v-model="authorization.email" props-id="email" input-type="email" label-name="Email"/>
                <FormInput v-model="authorization.password" props-id="password" input-type="password"
                           label-name="Parol"/>
                <div class="text-end">
                    <FormButton @click="auth()" :loading="isLoading" name="Kirish" class="btn-primary"/>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>