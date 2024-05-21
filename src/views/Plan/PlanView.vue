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
        <div class="page-header min-vh-100" :style="backgroundStyle" loading="lazy">
            <div class="row">
                <div
                    class="col-4 offset-1 d-lg-flex d-none h-100 my-auto position-absolute top-3 start-0 text-center justify-content-center flex-column">
                    <div class="rounded-calendar">
                        <!-- 조건부 렌더링을 통해 selectedDate가 있을 때만 ListDay 뷰 렌더링 -->
                        <FullCalendar :options="listOptions" />
                    </div>
                    <div class="rounded-calendar md-2" style="margin-top: 50px;">
                        <MaterialButton variant="gradient" color="secondary" class="mx-3 mt-3"> Submit Review
                        </MaterialButton>
                        <MaterialButton variant="gradient" color="secondary" class="mx-3 mt-3">
                            Fix Diary With Dall-E</MaterialButton>
                        <MaterialButton variant="gradient" color="secondary" class="mx-3 mt-3">
                            Share on InstaGram </MaterialButton>
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

<script setup>
import { ref, computed } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import bgImage from "@/assets/img/bgg4.png";
import MaterialButton from "@/components/MaterialButton.vue";
const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
};

const selectedDate = ref(null);

// Calendar options
const calendarOptions = {
    plugins: [dayGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
        { title: 'Meeting', start: new Date() }
    ]
};

const listOptions = {
    plugins: [listPlugin],
    initialView: 'listDay',
    events: calendarOptions.events
};
</script>

<style scoped>
.rounded-calendar {
    border-radius: 15px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
