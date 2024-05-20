<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";

const { VITE_ELECTRIC_CHARGING_STATION_URL } = import.meta.env;
const { VITE_OPEN_API_SERVICE_KEY } = import.meta.env;

const router = useRouter();

const email = ref("");
const password = ref("");

onMounted(() => {
    login();
});

const login = async () => {
    try {
        const response = await axios.post("/api/login", {
            email: email.value,
            password: password.value,
        });

        // 로그인 성공 시 액션
        console.log("Login successful", response.data);
        // 예를 들어, 홈 페이지로 리다이렉트
        router.push({ name: "home" });
    } catch (error) {
        console.error("Login failed", error);
    }
};

const moveSignUp = () => {
    router.push({ name: "signup" });
    console.log("Success Move sign-up");
};

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

import bgImage from "@/assets/img/bgg6.jpg";

const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
};

// material-input
import setMaterialInput from "@/assets/js/material-input";
import axios from "axios";
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
                    <div class="col-lg-4 col-md-8 col-12 mx-auto">
                        <div class="card z-index-0 fadeIn3 fadeInBottom">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                                    <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <form role="form" class="text-start">
                                    <MaterialInput
                                        id="email"
                                        class="input-group-outline my-3"
                                        :label="{
                                            text: 'Email',
                                            class: 'form-label',
                                        }"
                                        type="email"
                                    />
                                    <MaterialInput
                                        id="password"
                                        class="input-group-outline mb-3"
                                        :label="{
                                            text: 'Password',
                                            class: 'form-label',
                                        }"
                                        type="password"
                                    />
                                    <MaterialSwitch class="d-flex align-items-center mb-3" id="rememberMe" labelClass="mb-0 ms-3" checked>ID 정보 저장</MaterialSwitch>

                                    <div class="text-center">
                                        <MaterialButton class="my-4 mb-2" variant="gradient" color="success" fullWidth>Sign in</MaterialButton>
                                    </div>
                                    <p class="mt-4 text-sm text-center">
                                        Don't have an account?
                                        <button class="text-success text-gradient font-weight-bold" @click="moveSignUp">Sign up</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer position-absolute bottom-2 py-2 w-100">
                <div class="container">
                    <div class="row align-items-center justify-content-lg-between">
                        <div class="col-12 col-md-6 my-auto">
                            <div class="copyright text-center text-sm text-white text-lg-start">
                                Welcome!! We are
                                <a href="https://github.com/NinjasTrip" class="font-weight-bold text-white" target="_blank">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    [ Team. Semicolon Ninjas ]</a
                                >
                                of the 11th SSAFY.
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" class="nav-link text-white" target="_blank">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.instagram.com/bb_hhnn" class="nav-link text-white" target="_blank">ByungHeon Kang</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://github.com/seongddiyong" class="nav-link pe-0 text-white" target="_blank">SeongHoon Park</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </Header>
</template>
