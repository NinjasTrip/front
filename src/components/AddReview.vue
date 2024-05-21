<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div class="bg-gradient-secondary shadow-secondary border-radius-lg p-3">
                            <h3 class="text-white mb-0">Add a Review</h3>
                        </div>
                        <div class="user-info bg-white mt-3 d-flex align-items-center justify-content-center">
                            <img :src="profileImg" alt="Profile" class="avatar rounded-circle" />
                            <h1 class="mb-2 text-dark">{{ nickName }}</h1>
                            <!-- 텍스트 크기 변경 -->
                        </div>
                    </div>
                    <div class="card-body">
                        <form id="review-form" method="post" autocomplete="off" @submit.prevent="submitReview">
                            <div class="ratings mb-4">
                                <div class="rating-item">
                                    <h4 class="text-dark mt-2">Recommendation Score</h4>
                                    <vue3starRatings v-model="review.recommendation"></vue3starRatings>
                                </div>
                                <div class="rating-item">
                                    <h4 class="text-dark mt-2">Transportation</h4>
                                    <vue3starRatings v-model="review.transportation"></vue3starRatings>
                                </div>
                                <div class="rating-item">
                                    <h4 class="text-dark mt-2">Environment</h4>
                                    <vue3starRatings v-model="review.environment"></vue3starRatings>
                                </div>
                                <div class="rating-item">
                                    <h4 class="text-dark mt-2">Total Quality</h4>
                                    <vue3starRatings v-model="review.food"></vue3starRatings>
                                </div>
                            </div>
                            <h4 class="text-dark mt-2">Food Quality</h4>
                            <MaterialTextArea class="input-group-static" label="Comment" v-model="review.comment" placeholder="Write your review here..." />
                            <div class="text-center mt-5">
                                <MaterialButton variant="gradient" color="secondary" class="mx-2">Submit Review </MaterialButton>
                                <MaterialButton variant="gradient" color="secondary" class="mx-2" @click="closeModal"> Close </MaterialButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import vue3starRatings from "vue3-star-ratings";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const userIdx = userInfo.value.userIdx;
const nickName = userInfo.value.nickName;
const profileImg = userInfo.value.profileImg;

const review = ref({
    date: "",
    recommendation: 0,
    transportation: 0,
    environment: 0,
    food: 0,
    comment: "",
});
const emit = defineEmits(["close"]);

function submitReview() {
    console.log("Review submitted:", review.value);
    emit("close");
}

function closeModal() {
    emit("close");
}
</script>
<style scoped>
.avatar {
    width: 120px;
    /* 이미지 크기 증가 */
    height: 120px;
    /* 이미지 크기 증가 */
}

.user-info {
    border-radius: 15px;
    /* 모서리 둥글게 */
    padding: 10px;
    /* 커스텀 패딩 값 *
    /* 배경색 흰색 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.rating-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    /* 아래쪽 패딩 추가 */
    border-bottom: 1px solid #ccc;
    /* 구분선 추가 */
}

.rating-item label {
    flex-basis: 40%;
    font-size: 18px;
    /* 레이블 글씨 크기 키움 */
    color: #333;
    /* 글씨 색상 조정 */
}

.vue3starRatings {
    flex-grow: 1;
    font-size: 24px;
    /* 별점 글씨 크기 키움 */
}

.container {
    max-width: 800px;
    /* 폼의 최대 너비를 800px로 조정 */
    margin: auto;
    /* 중앙 정렬 */
}

.input-group-static {
    font-size: 18px;
    /* 입력 필드의 글씨 크기를 늘림 */
}

.card-header h3 {
    font-size: 24px;
    /* 카드 헤더의 글씨 크기를 늘림 */
}

.flex-fill {
    flex: 1 1 0px;
    margin-right: 10px;
    /* 필드 사이의 간격 유지 */
}

.text-center {
    display: flex;
    justify-content: center;
    /* 버튼을 중앙에 배치 */
}

.MaterialButton {
    font-size: 16px;
    /* 버튼의 글씨 크기를 늘림 */
}
</style>
