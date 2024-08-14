<script setup>
import {ref} from "vue";
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";

let email = ref(null)
let phone = ref(null)

function search() {
    console.log(email.value, phone.value)
}

function clear() {
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    email.value = null;
    phone.value = null;
}
</script>

<template>
    <div class="mt-5 mx-lg-5">
        <div class="row justify-content-center">
            <FormInput v-model="email" props-id="email" label-name="Email"
                       class="col-12 col-sm-6 col-md-4 col-lg-2"/>
            <FormInput v-model="phone" props-id="phone" label-name="Telefon"
                       class="col-12 col-sm-6 col-md-4 col-lg-2"/>
            <div class="col-6 col-md-4 col-lg-2 align-self-end mb-3">
                <FormButton @click="search()" name="Izlash" class="btn-success w-100"/>
            </div>
            <div class="col-6 col-md-4 col-lg-2 align-self-end mb-3">
                <FormButton @click="clear()" name="Tozalash" class="btn-danger w-100"/>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover table-bordered ">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Yoshingiz</th>
                    <th scope="col">Jins</th>
                    <th scope="col">Resgistrsatsiya sanasi</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Yoshingiz</th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Yoshingiz</th>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefon</th>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style>