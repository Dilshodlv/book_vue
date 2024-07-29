<script setup>
import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import BooksRow from "@/components/BooksRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";
import FooterRow from "@/components/FooterRow.vue";
</script>

<template>

    <!-- container boshlandi -->
    <div class="container-fluid">

        <!-- header qatori boshlandi -->
        <HeaderRow/>
        <!-- main qatori boshlandi -->
        <div class="row mt-4">

            <!-- category boshlandi -->
           <CategoriesCol/>
            <!-- category tugadi -->

            <!-- kontent boshlandi -->
            <div class="col-12 col-md-10 mt-4 mt-md-0">

                <!-- kitoblar qatori boshlandi -->
                <BooksRow/>
                <!-- kitoblar qatori tugadi -->

                <!-- pagination qatori boshlandi -->
                <PaginationRow/>
                <!-- pagination qatori tugadi -->


            </div>
            <!-- kontent tugadi -->

        </div>
        <!-- main qatori tugadi -->

        <!-- footer qatori boshlandi -->
        <FooterRow/>
        <!-- footer qatori tugadi -->

    </div>
    <!-- container tugadi -->
</template>

<style scoped>

</style>
