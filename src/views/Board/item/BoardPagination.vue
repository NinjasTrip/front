<script setup>
//Vue Material Kit 2 components
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";
</script>

<template>
    <section class="py-7">
        <div class="container">
            <div class="row justify-content-center py-2">
                <div class="col-lg-4">
                    <MaterialPagination class="d-flex justify-content-center">
                        <MaterialPaginationItem prev />
                        <MaterialPaginationItem label="1" active />
                        <MaterialPaginationItem label="2" />
                        <MaterialPaginationItem label="3" />
                        <MaterialPaginationItem label="4" />
                        <MaterialPaginationItem label="5" />
                        <MaterialPaginationItem next />
                    </MaterialPagination>
                </div>
            </div>
        </div>
    </section>
</template>
