import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import BasicView from "@/views/LandingPages/SignIn/BasicView.vue";
import ContactView from "@/views/LandingPages/ContactUs/ContactView.vue";

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
        {
            path: "/pages/landing-pages/contact-us",
            name: "contactus",
            component: ContactView,
        },
    ],
});

export default router;
