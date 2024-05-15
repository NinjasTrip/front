<template>
    <KakaoMap  ref="mapRef" :lat="37.566826" :lng="126.9786567" @onLoadKakaoMap="onLoadKakaoMap">
    <KakaoMapMarker
      v-for="(marker, index) in markerList"
      :key="marker.key === undefined ? index : marker.key"
      :lat="marker.lat"
      :lng="marker.lng"
      :infoWindow="marker.infoWindow"
      :clickable="true"
      @onClickKakaoMapMarker="onClickMapMarker(marker)"
    />
  </KakaoMap>
</template>

<script setup lang="ts">
import { onMounted, ref, type KakaoMapMarkerListItem } from 'vue';
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
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
//라이브러리 사용 방법을 반드시 참고하여 주시기 바랍니다.
const map = ref<kakao.maps.Map>();
const markerList = ref<KakaoMapMarkerListItem[]>([]);

const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;

  // 장소 검색 객체를 생성합니다
  const ps = new kakao.maps.services.Places();
  // 키워드로 장소를 검색합니다
  ps.keywordSearch('역삼역 맛집', placesSearchCB);
};

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
const placesSearchCB = (data: kakao.maps.services.PlacesSearchResult, status: kakao.maps.services.Status): void => {
  if (status === kakao.maps.services.Status.OK) {
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    const bounds = new kakao.maps.LatLngBounds();

    for (let marker of data) {
      const markerItem: KakaoMapMarkerListItem = {
        lat: marker.y,
        lng: marker.x,
        infoWindow: {
          content: marker.place_name,
          visible: false
        }
      };
      markerList.value.push(markerItem);
      bounds.extend(new kakao.maps.LatLng(Number(marker.y), Number(marker.x)));
    }

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.value?.setBounds(bounds);
  }
};

//마커 클릭 시 인포윈도우의 visible 값을 반전시킵니다
const onClickMapMarker = (markerItem: KakaoMapMarkerListItem): void => {
  if (markerItem.infoWindow?.visible !== null && markerItem.infoWindow?.visible !== undefined) {
    markerItem.infoWindow.visible = !markerItem.infoWindow.visible;
  } else {
    markerItem.infoWindow.visible = true;
  }
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
