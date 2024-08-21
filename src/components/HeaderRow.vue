<script setup>
import {useRouter} from "vue-router";
let isAdmin = () => JSON.parse(atob(localStorage.getItem('token').split('.')[1])).roles.includes("ROLE_ADMIN")


const router = useRouter()

function logout() {
    localStorage.removeItem('token')
    router.push('/login')
    location.assign('login')
}
</script>

<template>
    <div class="row">
        <div class="col">
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">
                        <router-link to="/" class="navbar-brand">KITOBLAR</router-link>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle"
                                       type="button" data-bs-toggle="dropdown">
                                        Kategoriyalar...
                                    </a>
                                    <ul>
                                        <li class="nav-item dropdown-menu">
                                            <router-link class="dropdown-item" to="/edit-category">
                                                O'zgartirish & O'chirish
                                            </router-link>
                                        </li>
                                    </ul>

                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/create-category">
                                        Kategoriya yaratish
                                    </router-link>
                                </li>
                                <li class="nav-item" >
                                    <router-link class="nav-link" to="/create-book">
                                        Kitob yaratish
                                    </router-link>
                                </li>
                                <li v-if="isAdmin" class="nav-item">
                                    <router-link  to="/admin-page" class="nav-link" >
                                        Admin sahifa
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/cabinet-page" class="nav-link" >
                                        Kabinet
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link @click="logout()" class="nav-link" to="/login">Chiqish</router-Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    </div>
    <!-- header qatori tugadi -->
</template>

<style scoped>

</style>