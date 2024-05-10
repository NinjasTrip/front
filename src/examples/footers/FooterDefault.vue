<script setup>
import NinjaLogo from "@/assets/img/NinjaLogo.png";
defineProps({
    brand: {
        type: Object,
        name: String,
        logo: String,
        route: "",
        default: () => ({
            name: "Ninja Trip",
            logo: NinjaLogo,
            route: "/",
        }),
    },
    menus: {
        type: Array,
        name: String,
        items: {
            type: Array,
            name: String,
            href: String,
        },
        default: () => [
            {
                name: "Semicolon Ninjas",
                items: [
                    {
                        name: "GitHub",
                        href: "https://github.com/NinjasTrip",
                    },
                    {
                        name: "about us",
                        href: "https://www.creative-tim.com/presentation",
                    },
                ],
            },
            {
                name: "ByungHeon Kang",
                items: [
                    {
                        name: "GitHub",
                        href: "https://github.com/kangbh98",
                    },
                    {
                        name: "Blog",
                        href: "https://kangbh98.tistory.com/",
                    },
                    {
                        name: "Instagram",
                        href: "https://www.instagram.com/bb_hhnn",
                    },
                ],
            },
            {
                name: "SeongHoon Park",
                items: [
                    {
                        name: "GitHub",
                        href: "https://github.com/seongddiyong",
                    },
                    {
                        name: "Blog",
                        href: "https://seongddiyong.tistory.com/",
                    },
                    {
                        name: "Instagram",
                        href: "https://www.instagram.com/ddi__s/",
                    },
                ],
            },
        ],
    },
});
</script>
<template>
    <footer class="footer pt-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <!-- 왼쪽 로고 쪽 html -->
                    <div class="footer-container">
                        <div>
                            <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
                        </div>
                        <div class="ms-2 px-1">
                            <h3 class="font-weight-bolder mb-4">{{ brand.name }}</h3>
                        </div>
                    </div>
                    <div>
                        <h6 class="font-weight-bolder mb-4">Team. Semicolon Ninjas</h6>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-6 mb-4" v-for="{ name, items } of menus" :key="name">
                    <h6 class="text-sm">{{ name }}</h6>
                    <ul class="flex-column ms-n3 nav">
                        <li class="nav-item" v-for="item of items" :key="item.name">
                            <a class="nav-link" :href="item.href" target="_blank">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col-12">
                    <div class="text-center">
                        <p class="text-dark my-4 text-sm font-weight-normal">
                            All rights reserved. Copyright ©
                            {{ new Date().getFullYear() }}
                            NinjaTrip by
                            <a>BH Kang, SH Park</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style setup>
.footer-container {
    display: flex;
}
</style>
