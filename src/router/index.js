import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import BasicView from "@/views/Presentation/LandingPages/SignIn/BasicView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "presentation",
            component: PresentationView,
        },
        {
            path: "/login",
            name: "login",
            component: BasicView,
        },
    ],
});

export default router;
