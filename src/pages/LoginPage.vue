<script setup>

import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
</script>

<template>
    <div class="row justify-content-center align-items-center vh-100">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <h1 class="text-center">Kirish</h1>
            <form>
                <FormInput props-id="email" input-type="email" label-name="Email" />
                <FormInput props-id="password" input-type="password" label-name="Parol" />
                <div class="text-end">
                    <FormButton name="Kirish" class="btn-primary" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>