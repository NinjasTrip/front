<script setup>
import BoardFormItem from "./item/BoardFormItem.vue";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import FooterDefault from "@/examples/footers/FooterDefault.vue";

import bg0 from "@/assets/img/bgg6.jpg";
</script>

<template>
    <div>
        <!-- Navbar -->
        <div class="container position-sticky z-index-sticky top-0">
            <div class="row">
                <div class="col-12">
                    <NavbarDefault :sticky="true" />
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="page-header min-vh-75 d-flex align-items-center justify-content-center" :style="{ backgroundImage: `url(${bg0})` }">
            <div class="container mt-8">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="content-wrapper p-4 shadow-sm">
                            <h2 class="title-square my-3 py-3 text-center">
                                <div>글쓰기</div>
                            </h2>
                            <div class="text-start">
                                <BoardFormItem type="regist" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <FooterDefault />
    </div>
</template>

<style scoped>
.title-square {
    background-color: rgb(187, 187, 187);
    border-radius: 30px;
}

.content-wrapper {
    background-color: white;
    border-radius: 30px;
    padding: 20px; /* Adjust padding as needed */
}
</style>
