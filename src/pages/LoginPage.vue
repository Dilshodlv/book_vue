<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {reactive, ref} from "vue";
import {userAuthorization} from "@/stores/user/authorization.js";
import {useRouter} from "vue-router";

const router = useRouter()

let isLoading = ref(false);
let authorization = reactive({
    email: '',
    password: ''
});

function auth() {
    isLoading.value = true;
    userAuthorization().userAuth(authorization)
        .then(() => {
            router.push('/')
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
                <div class="d-flex justify-content-between">
                    <FormButton @click="auth()" :loading="isLoading" name="Kirish" class="btn-primary "/>
                    <router-link class="btn btn-outline-info" to="registration">Royhatdan o'tish</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>