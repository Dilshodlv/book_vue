<script setup>
import {ref} from "vue";
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useFetchUsers} from "@/stores/user/getUser.js";

let query = ref('?page=1')
const storeUser = useFetchUsers()
storeUser.usersGet('?page=1')
const { state } = storeUser

let email = ref(null)
let phone = ref(null)

function search() {
    query.value = '?page=1'

    if (email.value) {
        query.value += '&email=' + email.value
    }
    if (phone.value) {
        query.value += '&phone=' + phone.value
    }
    if (email.value || phone.value) {
        storeUser.usersGet(query.value)
    }
}

function clear() {
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    email.value = null;
    phone.value = null;
    storeUser.usersGet('?page=1')
}

let currentPage = ref(1)

function changePage(value) {
    console.log(value)
    storeUser.usersGet(query.value.replace(/page=[1-9]/, 'page=' + value))
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
                    <th scope="col">Id</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Yoshingiz</th>
                    <th scope="col">Jins</th>
                    <th scope="col">Resgistrsatsiya sanasi</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in state.users" :key="user.id">
                    <th scope="row">{{ user.id }}</th>
                    <th scope="col">{{ user.email }}</th>
                    <th scope="col">{{ user.phone }}</th>
                    <th scope="col">{{ user.age }}</th>
                    <th scope="col">{{ user.gender }}</th>
                    <td>{{ user.createdAt.slice(0,10) }}</td>
                </tr>
                </tbody>
            </table>
            <div class="me-3">
                Jami foydalanuvchilar: {{ state.totalItems }}
            </div>
        </div>
        <nav>
            <ul class="pagination justify-content-end">
                <li :class="{'active':currentPage === 1}">
                    <span @click="changePage(1)" class="page-link rounded btn" href="#">Previous</span>
                </li>
                <li
                    v-for="index in state.pageCount"
                    :key="index"
                    :class="{'active':currentPage === index}"
                    class="page-item  mx-1"
                >
                    <span @click="changePage(index)" class="page-link btn btn-primary rounded">{{ index }}</span>
                </li>
                <li :class="{'disabled':currentPage === state.pageCount}">
                    <span @click="changePage(state.pageCount)" class="page-link rounded btn btn-primary">Next</span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>

</style>