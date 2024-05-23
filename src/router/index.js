import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import LoginView from "@/views/LandingPages/User/LoginView.vue";
import SignUpView from "@/views/LandingPages/User/SignUpView.vue";
import DestinationView from "@/views/LandingPages/ContactUs/DestinationView.vue";
import PlanView from "@/views/Plan/PlanView.vue";
import BoardList from "@/views/Board/BoardList.vue";
import BoardWrite from "@/views/Board/BoardWrite.vue";
import BoardDetail from "@/views/Board/BoardDetail.vue";
import BoardModify from "@/views/Board/BoardModify.vue";
import FindPassword from "@/views/LandingPages/User/FindPassword.vue";
import ChangeUserInfo from "@/views/LandingPages/User/ChangeUserInfo.vue";
import ChangedUserInfo from "@/views/LandingPages/User/ChangedUserInfo.vue";
import UserInfo from "@/views/LandingPages/User/UserInfo.vue";

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
            path: "/find-pw",
            name: "find-password",
            component: FindPassword,
        },
        {
            path: "/user/info",
            name: "user-info",
            component: UserInfo,
        },
        {
            path: "/user/infoo",
            name: "user-infoo",
            component: ChangedUserInfo,
        },
        {
            path: "/user/change-info",
            name: "change-info",
            component: ChangeUserInfo,
        },
        {
            path: "/pages/landing-pages/contact-us",
            name: "contactus",
            component: DestinationView,
        },
        {
            path: "/pages/Plan/PlanView",
            name: "plan",
            component: PlanView,
        },
        {
            path: "/board",
            name: "board",
            component: BoardList,
        },
        {
            path: "/board/write",
            name: "board-write",
            component: BoardWrite,
        },
        {
            path: "/board/:boardIdx",
            name: "article-view",
            component: BoardDetail,
        },
        {
            path: "/board/modify/:boardIdx",
            name: "article-modfify",
            component: BoardModify,
        },
    ],
});

export default router;
