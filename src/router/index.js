import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import ContactView from "@/views/Presentation/LandingPages/ContactUs/ContactView.vue";
import LoginView from "@/views/LandingPages/User/LoginView.vue";
import SignUpView from "@/views/LandingPages/User/SignUpView.vue";
import DestinationView from "@/views/LandingPages/ContactUs/DestinationView.vue";
import PlanView from "@/views/Plan/PlanView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "presentation",
            component: PresentationView,
        },
        {
            path: "/user/login",
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
            component: DestinationView,
        },
        {
            path: "/pages/plan/PlanView",
            name: "plan",
            component: PlanView,
        },
    ],
});

export default router;
