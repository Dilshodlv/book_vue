<script setup>

import {reactive, ref} from "vue";
import {useCreateBook} from "@/stores/book/createBook.js";
import router from "@/plugins/router.js"
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useFetchCategories} from "@/stores/category/getCategories.js";
let file = ref()
let book = reactive({
    name: '',
    description: '',
    text:'',
    category:'',
    image: ''
})

function create(){
    useCreateBook().createBook(book)
        .then(() => {
            router.push('/')
        })
}
function selectImage(event){
    file =event.target.file[0];
}
</script>

<template>
<div class="row mb-3">
    <div class="col-12 col-md-6">
        <h1>Kitob yaratish</h1>
        <FormInput v-model="book.name" props-id="name" label-name="Kitob nomi"/>
        <FormInput v-model="book.description" props-id="description" label-name="Kitob tarifi"/>
        <textarea v-model="book.text" class="form-control " rows="8" placeholder="Kitob matni"/>
        <select v-model="book.category" class="form-select mb-3">
            <option v-for="category in useFetchCategories().state.categories"
                    :key="category.id" :value="category['@id']">
                {{category.name}}
            </option>
        </select>
        <input  @change="selectImage($event)" type="file" class="form-control mt-3">
        <div class="text-end">
            <FormButton @click="create()" name="Yaratish" class="btn btn-success mt-3"/>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>