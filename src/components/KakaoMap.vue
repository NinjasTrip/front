<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
import { toRaw } from "vue";
export default {
    name: "KakaoMap",
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3b2905e963dece1f2a34a9b0c887904b";
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 5,
            };

            //지도 객체를 등록합니다.
            //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
            this.map = new kakao.maps.Map(container, options);
        }
    },
};
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
