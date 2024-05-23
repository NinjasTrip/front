<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { listArticle } from "@/api/board.js";

import VSelect from "@/components/common/VSelect.vue";
import BoardListItem from "./item/BoardListItem.vue";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import FooterDefault from "@/examples/footers/FooterDefault.vue";
import BoardPagination from "@/views/Board/item/BoardPagination.vue";
import { storeToRefs } from "pinia";
import bg0 from "@/assets/img/bgg6.jpg";

const router = useRouter();

const selectOption = ref([
    { text: "검색조건", value: "" },
    { text: "글번호", value: "article_no" },
    { text: "제목", value: "subject" },
    { text: "작성자아이디", value: "user_id" },
]);

const articles = ref();
const currentPage = ref(1);
const totalPage = ref(0);
const param = ref({
    pgno: currentPage.value,
    // spp: VITE_ARTICLE_LIST_SIZE,
    key: "",
    word: "",
});

onMounted(() => {
    getArticleList();
});

const changeKey = (val) => {
    param.value.key = val;
};

const getArticleList = () => {
    listArticle(
        param.value,
        ({ data }) => {
            articles.value = data.articles;
            console.log(articles.value);
            // currentPage.value = data.currentPage;
            // totalPage.value = data.totalPageCount;
        },
        (error) => {
            console.error(error);
        }
    );
};

const onPageChange = (val) => {
    currentPage.value = val;
    param.value.pgno = val;
    getArticleList();
};

const moveWrite = () => {
    router.push({ name: "board-write" });
};

const moveDetail = (boardIdx) => {
    router.push({ name: "article-view", params: { boardIdx } });
};
</script>

<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <NavbarDefault :sticky="true" />
            </div>
        </div>
    </div>
    <div class="page-header min-vh-75 d-flex align-items-center justify-content-center" :style="{ backgroundImage: `url(${bg0})` }">
        <section class="translucent-section mt-8">
            <div class="container">
                <div class="row justify-content-center not-trans-section">
                    <div class="col-lg-10">
                        <h2 class="title-square my-3 py-3 shadow-sm text-center">
                            <div>게시판</div>
                        </h2>
                    </div>
                    <div class="col-lg-10">
                        <div class="row mb-2">
                            <div class="col-md-2 text-start">
                                <button type="button" class="btn btn-outline-primary btn-sm" @click="moveWrite">글쓰기</button>
                            </div>
                            <div class="col-md-5 offset-md-5">
                                <form class="d-flex">
                                    <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />
                                    <div class="input-group input-group-sm ms-1 align-items-center">
                                        <input type="text" class="form-control border me-1" v-model="param.word" placeholder="검색어..." />
                                        <button class="btn btn-dark align-items-center" type="button" @click="getArticleList">검색</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <BoardListItem v-for="article in articles" :key="article.boardIdx" :article="article" @click="moveDetail(article.boardIdx)" />
                        </div>
                    </div>
                    <BoardPagination />
                </div>
            </div>
        </section>
    </div>
    <FooterDefault />
</template>

<style scoped>
.translucent-section {
    background-color: rgba(255, 255, 255, 0.8); /* Adjust the opacity as needed */
    padding: 20px; /* Add padding to prevent content from touching the edges */
    border-radius: 10px; /* Optional: add rounded corners */
}

.not-trans-section {
    background-color: rgba(255, 255, 255); /* Adjust the opacity as needed */
    border-radius: 10px; /* Optional: add rounded corners */
}

.title-square {
    background-color: rgb(187, 187, 187);
    border-radius: 30px;
}
</style>
