<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { registArticle, getModifyArticle, modifyArticle } from "@/api/board";

import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";

const router = useRouter();
const route = useRoute();

const props = defineProps({ type: String });

const isUseId = ref(false);

const article = ref({
    articleNo: 0,
    subject: "",
    content: "",
    userId: "",
    userName: "",
    hit: 0,
    registerTime: "",
    imageUrl: "", // 이미지 URL을 추가
});

const imageFile = ref(null);
const imagePreview = ref("");

if (props.type === "modify") {
    let { articleno } = route.params;
    getModifyArticle(
        articleno,
        ({ data }) => {
            article.value = data;
            isUseId.value = true;
            imagePreview.value = data.imageUrl; // 이미지 URL 설정
        },
        (error) => {
            console.error(error);
        }
    );
    isUseId.value = true;
}

const subjectErrMsg = ref("");
const contentErrMsg = ref("");
watch(
    () => article.value.subject,
    (value) => {
        let len = value.length;
        if (len == 0 || len > 30) {
            subjectErrMsg.value = "제목을 확인해 주세요!!!";
        } else subjectErrMsg.value = "";
    },
    { immediate: true }
);
watch(
    () => article.value.content,
    (value) => {
        let len = value.length;
        if (len == 0 || len > 500) {
            contentErrMsg.value = "내용을 확인해 주세요!!!";
        } else contentErrMsg.value = "";
    },
    { immediate: true }
);

function onImageChange(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        imageFile.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("이미지 파일만 업로드할 수 있습니다.");
        event.target.value = ""; // 파일 입력 필드를 리셋합니다.
    }
}

function onSubmit() {
    // event.preventDefault();

    if (subjectErrMsg.value) {
        alert(subjectErrMsg.value);
    } else if (contentErrMsg.value) {
        alert(contentErrMsg.value);
    } else {
        if (imageFile.value) {
            uploadImage(imageFile.value)
                .then((imageUrl) => {
                    article.value.imageUrl = imageUrl;
                    props.type === "regist" ? writeArticle() : updateArticle();
                })
                .catch((error) => {
                    console.error("이미지 업로드 실패:", error);
                    alert("이미지 업로드 실패");
                });
        } else {
            props.type === "regist" ? writeArticle() : updateArticle();
        }
    }
}

function uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);

    return fetch("/api/upload", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => data.imageUrl)
        .catch((error) => {
            console.error("이미지 업로드 실패:", error);
            throw error;
        });
}

function writeArticle() {
    console.log("글등록하자!!", article.value);
    registArticle(
        article.value,
        (response) => {
            let msg = "글등록 처리시 문제 발생했습니다.";
            if (response.status == 201) msg = "글등록이 완료되었습니다.";
            alert(msg);
            moveList();
        },
        (error) => console.error(error)
    );
}

function updateArticle() {
    console.log(article.value.articleNo + "번글 수정하자!!", article.value);
    modifyArticle(
        article.value,
        (response) => {
            let msg = "글수정 처리시 문제 발생했습니다.";
            if (response.status == 200) msg = "글정보 수정이 완료되었습니다.";
            alert(msg);
            moveList();
        },
        (error) => console.log(error)
    );
}

function moveList() {
    router.push({ name: "board" });
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div class="container">
            <div class="mb-3">
                <MaterialInput class="input-group-static mb-4" label="Title" type="text" placeholder="" v-model="article.subject" />
            </div>
            <MaterialTextArea class="input-group-static mb-4" id="message" :rows="10" v-model="article.subject">Content</MaterialTextArea>
        </div>
        <!-- <div class="mb-3">
            <label for="imageUpload" class="form-label">Upload Image</label>
            <MaterialFileUpload variant="contained" color="secondary" class="w-auto me-2" @click="triggerFileSelect"> 파일 선택 </MaterialFileUpload>
            <input type="file" class="form-control" id="imageUpload" @change="onImageChange" />
            <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" class="img-thumbnail mt-3" />
            <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" class="img-thumbnail mt-3" />
        </div> -->
        <div class="container">
            <div class="mb-3">
                <label for="imageUpload" class="form-label">이미지 업로드</label>
                <input type="file" class="form-control" id="imageUpload" @change="onImageChange" />
                <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" class="img-thumbnail preview-image mt-3" />
            </div>
        </div>
        <div class="col-auto text-center">
            <button type="submit" class="btn btn-outline-primary mb-3" v-if="type === 'regist'">글작성</button>
            <button type="submit" class="btn btn-outline-success mb-3" v-else>글수정</button>
            <button type="button" class="btn btn-outline-danger mb-3 ms-1" @click="moveList">목록으로이동...</button>
        </div>
    </form>
</template>

<style scoped>
.preview-image {
    max-width: 300px; /* 최대 너비 */
    height: auto; /* 높이는 자동으로 조절 */
}
</style>
