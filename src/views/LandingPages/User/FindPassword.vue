<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// example components
import DefaultNavbar from "@/examples/navbars/NavbarBeforeLogin.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/LoginInput.vue";
import SimpleModalOfFind from "@/components/common/SimpleModalOfFind.vue";
import MaterialButton from "@/components/MaterialButton.vue";

import bgImage from "@/assets/img/bgg6.jpg";

const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
};

const showTokenInput = ref(false);
const showPasswordInput = ref(false);

const moveLogin = () => {
    router.push({ name: "login" });
    console.log("Success Move Login");
};

const sendEmail = () => {
    showTokenInput.value = true;
};

const confirmToken = () => {
    showPasswordInput.value = true;
};

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
    setMaterialInput();
});
</script>

<template>
    <DefaultNavbar transparent />
    <Header>
        <div class="page-header align-items-start min-vh-100" :style="backgroundStyle" loading="lazy">
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container my-auto">
                <div class="row">
                    <div class="col-lg-6 col-md-8 col-12 mx-auto">
                        <div class="card z-index-0 fadeIn3 fadeInBottom">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                                    <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Welcome to Ninja Trip!</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <form role="form" class="text-start">
                                    <div class="d-flex flex-column flex-md-row align-items-center my-3">
                                        <MaterialInput
                                            id="email"
                                            class="input-group-outline flex-grow-1"
                                            :label="{
                                                text: 'Email',
                                                class: 'form-label',
                                            }"
                                            type="email"
                                        />
                                        <MaterialButton v-if="!showTokenInput" variant="gradient" color="success" class="ms-0 ms-md-3 mt-3 mt-md-0" @click="sendEmail">SEND!</MaterialButton>
                                    </div>
                                    <div v-if="showTokenInput" class="d-flex flex-column flex-md-row align-items-center my-3">
                                        <MaterialInput
                                            id="token"
                                            class="input-group-outline flex-grow-1"
                                            :label="{
                                                text: 'Token',
                                                class: 'form-label',
                                            }"
                                            type="text"
                                        />
                                        <MaterialButton v-if="!showPasswordInput" variant="gradient" color="success" class="ms-0 ms-md-3 mt-3 mt-md-0" @click="confirmToken">CONFIRM!</MaterialButton>
                                    </div>
                                    <div v-if="showPasswordInput">
                                        <MaterialInput
                                            id="password"
                                            class="input-group-outline mb-3"
                                            :label="{
                                                text: 'Password',
                                                class: 'form-label',
                                            }"
                                            type="password"
                                        />
                                        <div class="text-center">
                                            <MaterialButton class="my-4 mb-2" variant="gradient" color="success" fullWidth @click="moveLogin">Complete!</MaterialButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Header>
</template>

<style scoped>
.input-group-outline {
    flex: 1;
}
</style>
