<script setup>

import {useFetchBooks} from "@/stores/book/getBooks.js";
import {computed, watch} from "vue";
import {useRoute} from "vue-router";

useFetchBooks().booksGet()
const books = computed( () => useFetchBooks().state.books)
const host = import.meta.env.VITE_API_DOMEN
const route = useRoute();

watch(
    () => route.params.id,
    (value) => {
        if (value === undefined){
            useFetchBooks().booksGet()
        }else {
            useFetchBooks().booksGet('/by-category?categoryId=' + route.params.id)
        }
    }
)

</script>

<template>
    <div class="row">
       <div v-for="book in books" :key="book.id"
           class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">

            <div class="card" >
                <img :src="host + book.image.contentUrl"
                     class="" height="350" alt="...">
                <div class="card-body" >
                    <h5 class="card-title">{{book.name}}</h5>
                    <h5 class="text-end" style="font-size: 15px">{{book.category.name}} </h5>
                    <p class="card-text">{{book.description}}</p>
                    <router-link :to="'/book-info/' + book.id" class="btn btn-primary">O'qish</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>