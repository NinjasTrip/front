<template>
    <KakaoMap ref="mapRef" :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true">
        <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
    </KakaoMap>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
const coordinate = {
    lat: 33.450701,
    lng: 126.570667
};
const mapRef = ref(null);

onMounted(() => {
    const mapElement = mapRef.value.$el;
    mapElement.style.position = 'fixed';
    mapElement.style.top = '0';
    mapElement.style.left = '0';
    mapElement.style.width = '100vw';
    mapElement.style.height = '100vh';
    mapElement.style.zIndex = '-1';
    mapElement.style.filter = 'grayscale(40%) contrast(75%)';
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
    position: fixed;
    /* 화면에 고정 */
    top: 0;
    /* 상단 정렬 */
    left: 0;
    /* 좌측 정렬 */
    width: 100vw;
    /* 뷰포트 너비에 맞춤 */
    height: 100vh;
    /* 뷰포트 높이에 맞춤 */
    z-index: -1;
    /* 다른 요소들 뒤에 위치하도록 설정 */
    filter: grayscale(40%) contrast(75%);
}
</style>
