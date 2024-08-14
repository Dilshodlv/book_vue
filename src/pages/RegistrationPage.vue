<script setup>

import FormInput from "@/components/tags/FormInput.vue";
import {reactive} from "vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useCreateUser} from "@/stores/user/registration.js";

let registration = reactive({
    email: '',
    password: '',
    age: 0,
    gender: '',
    phone: ''
});

function regUser() {
    useCreateUser().userCreate(registration)
        .then(() => {
            location.assign('/login')
        })
}
</script>

<template>
    <div class="row justify-content-center align-items-center vh-100">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <h1 class="text-center">Royhatdan o'tish</h1>
            <FormInput v-model="registration.email" props-id="email" label-name="Email" input-type="email"/>
            <FormInput
                v-model="registration.password"
                props-id="password"
                label-name="Parol"
                input-type="password"/>
            <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">Yoshingiz</label>
                <input v-model="registration.age" type="number" class="form-control" id="exampleInputEmail">

            </div>
            <FormInput
                v-model="registration.gender"
                props-id="gender"
                label-name="Jinsingiz"
            />
            <FormInput
                v-model="registration.phone"
                props-id="number"
                label-name="Telefon raqamingiz"
            />


            <div class="d-flex justify-content-between">
                <FormButton @click="regUser" name="Royhatdan o'tish" class="btn-primary"/>
                <router-link class="btn btn-outline-info" to="/login">Kirish</router-link>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>