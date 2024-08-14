<script setup>

import {useRoute} from "vue-router";
import {useFetchbook} from "@/stores/book/getBook.js";
import {computed} from "vue";

const route = useRoute()
console.log(route)
const bookStore = useFetchbook()

bookStore.booksGet(route.params.bookId)
const book = computed( () => bookStore.state)
</script>

<template>
    <h1> {{book.name}}</h1>

    <p>
        {{book.text}}
    </p>
</template>

<style scoped>

</style>