<script setup>

import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useCreateCategory} from "@/stores/category/createCategory.js";
import {reactive} from "vue";
import router from "@/plugins/router.js";

let category = reactive({
    name: ''
})

function create() {
    useCreateCategory().categoryCreate(category)
        .then(() => {
            router.push("/")
        })
}
</script>

<template>
    <div class="row mb-3">
        <div class="col-12 col-md-6">
            <h1>Kategoriya yaratish</h1>
            <FormInput v-model="category.name" props-id="name" label-name="Kategoriya nomi"/>
            <div class="text-end">
                <FormButton @click="create()" name="Yaratish" class="btn-success "/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
