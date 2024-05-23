<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { detailArticle, deleteArticle } from "@/api/board";
import { format } from "date-fns";

import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import FooterDefault from "@/examples/footers/FooterDefault.vue";
import bg0 from "@/assets/img/bgg6.jpg";

const route = useRoute();
const router = useRouter();

const { boardIdx } = route.params;
const article = ref(null);

onMounted(() => {
    getArticle();
});

const getArticle = async () => {
    detailArticle(
        boardIdx,
        ({ data }) => {
            article.value = data;
            if (article.value.createdAt) {
                article.value.formattedDate = format(new Date(...article.value.createdAt), "PPPppp");
            }
        },
        (error) => {
            console.error(error);
        }
    );
};

function moveList() {
    router.push({ name: "board" });
}

function moveModify() {
    router.push({ name: "article-modify", params: { boardIdx } });
}

function onDeleteArticle() {
    deleteArticle(
        boardIdx,
        (response) => {
            if (response.status == 200) moveList();
        },
        (error) => {
            console.error(error);
        }
    );
}
</script>

<template>
    <div>
        <NavbarDefault :sticky="true" />
        <div class="page-header min-vh-75" :style="{ backgroundImage: `url(${bg0})` }">
            <div class="container mt-8">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="content-wrapper p-4 shadow-sm">
                            <h2 class="title-square my-3 py-3 text-center">{{ article.article.title }}</h2>
                            <div class="article-details">
                                <p>작성자: {{ article.article.nickname }}</p>
                                <p>내용: {{ article.article.content }}</p>
                                <p>작성일: {{ article.article.formattedDate || "" }}</p>
                                <p>조회수: {{ article.article.hit }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterDefault />
    </div>
</template>

<style scoped>
.title-square {
    background-color: rgb(187, 187, 187);
    border-radius: 30px;
}

.content-wrapper {
    background-color: white;
    border-radius: 30px;
    padding: 20px;
}

.article-details p {
    margin-bottom: 0.5rem;
}
</style>
