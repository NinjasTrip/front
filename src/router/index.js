import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import ContactView from "@/views/LandingPages/ContactUs/ContactView.vue";
import LoginView from "@/views/LandingPages/User/LoginView.vue";
import SignUpView from "@/views/LandingPages/User/SignUpView.vue";

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
            component: LoginView,
        },
        {
            path: "/sign-up",
            name: "signup",
            component: SignUpView,
        },
        {
            path: "/pages/landing-pages/contact-us",
            name: "contactus",
            component: ContactView,
        },
    ],
});

export default router;
