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
                        <FullCalendar :key="listCalendarKey" :options="listOptions" />
                        <div v-if="diaryData" class="diary-entry">
                            <h4 class="text-dark mt-2">Your Travel Image</h4>
                            <img :src="diaryData.imageUrl" alt="Diary Image" class="diary-image" />
                            <h4 class="text-dark mt-2">Comment</h4>
                            <p class="diary-comment">{{ diaryData.comment }}</p>
                        </div>
                        <MaterialButton variant="gradient" color="secondary" class="mx-3 mt-3">
                            Fix Diary With Dall-E
                        </MaterialButton>
                        <MaterialButton variant="gradient" color="secondary" class="mx-3 mt-3">
                            Share on InstaGram
                        </MaterialButton>
                    </div>
                </div>
                <div
                    class="col-6 offset-6 d-lg-flex d-none h-100 my-auto position-absolute top-3 start-0 text-center justify-content-center flex-column">
                    <div
                        style="  border-radius: 15px; padding: 10px;background-color: #ffffff; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);">
                        <FullCalendar :options="calendarOptions" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <DefaultFooter />
</template>



<script>
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import bgImage from "@/assets/img/bgg4.png";
import MaterialButton from "@/components/MaterialButton.vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

export default {
    components: {
        FullCalendar,
        DefaultNavbar,
        DefaultFooter,
        MaterialButton
    },
    setup() {
        const userStore = useUserStore();
        const { userInfo } = storeToRefs(userStore);

        const backgroundStyle = ref({
            backgroundImage: `url(${bgImage})`,
        });

        const events = ref([]);
        const listCalendarKey = ref(0); // 캘린더 리렌더링을 위한 키
        const selectedDate = ref(null); // 클릭된 날짜를 저장할 ref
        const diaryData = ref(null); // 다이어리 데이터를 저장할 ref
        const listCalendarHeight = ref(800); // 리스트 캘린더의 초기 높이

        const listOptions = ref({
            plugins: [listPlugin],
            initialView: 'listDay',
            events: events.value,
            initialDate: null
        });

        const calendarOptions = ref({
            plugins: [dayGridPlugin, interactionPlugin, listPlugin],
            initialView: 'dayGridMonth',
            weekends: true,
            events: events.value,
            dateClick: handleDateClick
        });

        function handleDateClick(arg) {
            selectedDate.value = arg.dateStr;
            // listOptions의 initialDate를 클릭된 날짜로 변경하고, key를 갱신하여 강제로 리렌더링
            listOptions.value = { ...listOptions.value, initialDate: arg.dateStr };
            listCalendarKey.value += 1; // key 변경을 통해 강제로 리렌더링

            // 새로운 데이터를 가져오는 함수 호출
            fetchDiaryData(arg.dateStr);
        }

        async function fetchEvents() {
            try {
                const response = await axios.get(`http://localhost:8080/plan/${userInfo.value.userIdx}`);
                const plans = response.data.planinfo;
                events.value = plans.map(plan => ({
                    title: `${plan.placeName} (${plan.category})`,
                    start: plan.date && plan.time ? `${plan.date}T${plan.time}` : plan.date,
                    allDay: !plan.time
                }));
                calendarOptions.value = { ...calendarOptions.value, events: events.value };
                listOptions.value = { ...listOptions.value, events: events.value };

            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }

        async function fetchDiaryData(date) {
            try {
                console.log('Fetching diary data for date:', date); // 확인용 로그
                console.log('User ID:', userInfo.value.userIdx); // 확인용 로그
                const response = await axios.get(`http://localhost:8080/plan/get/diary`, {
                    params: {
                        userIdx: userInfo.value.userIdx,
                        date: date
                    }
                });
                diaryData.value = response.data;
            } catch (error) {
                console.error('Error fetching diary data:', error);
                diaryData.value = null;
            }
        }


        onMounted(fetchEvents);

        return {
            backgroundStyle,
            calendarOptions,
            listOptions,
            listCalendarKey,
            selectedDate,
            listCalendarHeight,
            diaryData
        };
    }
};
</script>


<style scoped>
.rounded-calendar {
    border-radius: 15px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    max-height: 1000px;
    /* 최대 높이 설정 */
    overflow-y: auto;
    /* 세로 스크롤바 추가 */
}

.diary-entry {
    margin-top: 20px;
    width: 100%;
    /* 이미지 컨테이너의 너비를 100%로 설정 */
}

.diary-image {
    width: 100%;
    /* 이미지의 너비를 100%로 설정 */
    height: auto;
    /* 이미지의 높이를 자동으로 설정 */
    object-fit: contain;
    /* 이미지가 컨테이너에 맞도록 조절 */
    border: 5px solid #6c757d;
    /* 테두리를 secondary 색상으로 설정 */
    filter: grayscale(30%);
    /* 이미지를 흑백으로 설정 */
    border-radius: 15px;
    /* 테두리 모서리를 둥글게 설정 */
}

.diary-comment {
    font-size: 1.2em;
    margin-top: 10px;
}
</style>
