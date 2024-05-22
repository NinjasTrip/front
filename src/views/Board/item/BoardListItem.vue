<script setup>
defineProps({ article: Object });
</script>

<template>
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card h-100">
            <img :src="article.imageUrl" class="card-img-top" alt="대표 사진" />
            <div class="card-body">
                <h5 class="card-title">{{ article.subject }}</h5>
                <router-link :to="{ name: 'article-view', params: { boardIdx: article.boardIdx } }" class="btn btn-primary"> 자세히 보기 </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-img-top {
    height: 200px;
    object-fit: cover;
}
</style>
