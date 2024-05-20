<script setup>
import { ref, onMounted } from "vue";
import { useMarkerStore } from "@/stores/useMarkerStore";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import setMaterialInput from "@/assets/js/material-input";

const store = useMarkerStore();
const form = ref({
    placeName: store.placeName,
    address: store.address,
    phone: store.phone,
    category: store.category,
    date: "", // 날짜 입력을 위한 새 속성
    time: "", // 시간 입력을 위한 새 속성
});

function updateStore() {
    store.updateMarkerInfo({ ...form.value });
}

const emit = defineEmits(["close"]);

function emitClose() {
    emit("close");
}

async function handleSubmit() {
    try {
        await postPlan(
            form.value,
            (response) => {
                console.log("Plan added successfully:", response);
            },
            (error) => {
                console.error("Failed to add plan:", error);
            }
        );
        emitClose();
    } catch (error) {
        console.error("Error in handleSubmit:", error);
    }
}

onMounted(() => {
    setMaterialInput();
});
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div class="bg-gradient-secondary shadow-secondary border-radius-lg p-3">
                            <h3 class="text-white text-success mb-0">Add to Plan</h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="pb-3">For further questions, including partnership opportunities, please email fund88@naver.com or contact using our contact form.</p>
                        <form id="contact-form" method="post" autocomplete="off" @submit.prevent="updateStore">
                            <div class="d-flex flex-wrap">
                                <MaterialInput class="input-group-static mb-4 flex-fill" type="text" label="Place Name" v-model="form.placeName" />
                                <MaterialInput class="input-group-static mb-4 flex-fill" type="text" label="Address" v-model="form.address" />
                                <MaterialInput class="input-group-static mb-4 flex-fill" type="text" label="Phone" v-model="form.phone" />
                                <MaterialInput class="input-group-static mb-4 flex-fill" type="text" label="Category" v-model="form.category" />
                                <MaterialInput class="input-group-static mb-4 flex-fill" type="date" label="Date" v-model="form.date" />
                                <MaterialInput class="input-group-static mb-4 flex-fill" type="time" label="Time" v-model="form.time" />
                            </div>
                            <div class="text-center mt-3">
                                <MaterialButton variant="gradient" color="secondary" class="mx-2" @click="handleSubmit">Add Destination to my plan </MaterialButton>
                                <MaterialButton variant="gradient" color="secondary" class="mx-2" @click="emitClose">Close </MaterialButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
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

.mx-2 {
    margin-left: 10px;
    margin-right: 10px;
    /* 버튼 사이의 간격 */
}

.MaterialButton {
    font-size: 16px;
    /* 버튼의 글씨 크기를 늘림 */
}
</style>
