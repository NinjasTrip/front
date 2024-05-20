<script setup>
import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import bgImage from "@/assets/img/bgg4.jpg";
const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
};

const calendarOptions = ref({
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
        { title: 'Meeting', start: new Date() }
    ]
});
</script>
<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <DefaultNavbar :sticky="true" :action="{
                    route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
                    color: 'bg-gradient-success',
                    label: 'Buy Now',
                }" />
            </div>
        </div>
    </div>
    <section>
        <div class="page-header min-vh-100 " :style="backgroundStyle" loading="lazy">
            <div class="row">
                <div
                    class="col-4 offset-1 d-lg-flex d-none h-100 my-auto position-absolute top-3 start-0 text-center justify-content-center flex-column">
                    <div class="rounded-calendar">
                    </div>
                </div>
                <div
                    class="col-6 offset-6 d-lg-flex d-none h-100 my-auto position-absolute top-3 start-0 text-center justify-content-center flex-column">
                    <div class="rounded-calendar">
                        <FullCalendar :options="calendarOptions" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <DefaultFooter />
</template>
<style scoped>
.rounded-calendar {
    border-radius: 15px;
    /* 모서리 둥글게 */
    padding: 30px;
    /* 커스텀 패딩 값 */
    background-color: #ffffff;
    /* 배경색 흰색 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    /* 그림자 효과 추가 */
}
</style>