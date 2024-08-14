<script setup>

import HeaderRow from "@/components/HeaderRow.vue";
import FooterRow from "@/components/FooterRow.vue";
</script>

<template>
<div class="container-fluid">
    <HeaderRow/>

    <router-view/>

    <FooterRow/>
</div>
</template>

<style scoped>

</style>