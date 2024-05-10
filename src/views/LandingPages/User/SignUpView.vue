<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

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
onMounted(() => {
    setMaterialInput();
});

const movePresentation = () => {
    router.push({ name: "presentation" });
    console.log("Success Move Login");
};

const areaCode = ref("010");
const middleNumber = ref("");
const lastNumber = ref("");

function validateMiddleNumber() {
    // 입력된 값이 숫자이고 4자리인지 확인
    if (/^\d{4}$/.test(middleNumber.value)) {
        // 조건을 만족하는 경우 아무 작업도 수행하지 않음
    } else {
        // 4자리 이상인 경우 처음 4자리만 남기고 자름
        middleNumber.value = middleNumber.value.slice(0, 4);
    }
}

function validateLastNumber() {
    // 입력된 값이 숫자이고 4자리인지 확인
    if (/^\d{4}$/.test(lastNumber.value)) {
        // 조건을 만족하는 경우 아무 작업도 수행하지 않음
    } else {
        // 4자리 이상인 경우 처음 4자리만 남기고 자름
        lastNumber.value = lastNumber.value.slice(0, 4);
    }
}
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
                                    <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Welcome to Ninja Trip!</h4>
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
                                    <MaterialInput
                                        id="nickname"
                                        class="input-group-outline mb-3"
                                        :label="{
                                            text: 'Nickname',
                                            class: 'form-label',
                                        }"
                                        type="text"
                                        pattern="^[가-힣a-zA-Z0-9]+$"
                                    />
                                    <MaterialInput
                                        id="age"
                                        class="input-group-outline mb-3"
                                        :label="{
                                            text: 'Age',
                                            class: 'form-label',
                                        }"
                                        type="number"
                                        min="0"
                                    />
                                    <!-- <MaterialInput
                                        id="phone-number"
                                        class="input-group-outline mb-3"
                                        :label="{
                                            text: 'Phone Number',
                                            class: 'form-label',
                                        }"
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                                    /> -->
                                    <div class="input-group-outline mb-3">
                                        <label for="phone-number" class="form-label">Phone Number</label>
                                        <div class="row g-2 align-items-center">
                                            <div class="col-auto">
                                                <select class="form-select" v-model="areaCode" id="area-code">
                                                    <option value="010">010</option>
                                                    <option value="011">011</option>
                                                    <option value="016">016</option>
                                                    <option value="017">017</option>
                                                    <option value="018">018</option>
                                                    <option value="019">019</option>
                                                </select>
                                            </div>
                                            <div class="col-auto">-</div>
                                            <div class="col">
                                                <input type="number" class="form-control" v-model.number="middleNumber" @input="validateMiddleNumber" maxlength="4" placeholder="0000" />
                                            </div>
                                            <div class="col-auto">-</div>
                                            <div class="col">
                                                <input type="number" class="form-control" v-model.number="lastNumber" @input="validateLastNumber" maxlength="4" placeholder="0000" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <MaterialButton class="my-4 mb-2" variant="gradient" color="success" fullWidth @click="movePresentation">회원 가입</MaterialButton>
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

<style scoped></style>
