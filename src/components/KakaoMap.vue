<template>
  <KakaoMap ref="mapRef" :lat="37.566826" :lng="126.9786567" :level="5" :draggable="true" width="100vw" height="100vh"
    @onLoadKakaoMap="onLoadKakaoMap">
    <KakaoMapMarker v-for="(marker, index) in markerList" :key="marker.key === undefined ? index : marker.key"
      :lat="marker.lat" :lng="marker.lng" :infoWindow="marker.infoWindow" :clickable="true"
      @onClickKakaoMapMarker="onClickMapMarker(marker)" />
  </KakaoMap>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { KakaoMap, KakaoMapMarker, type KakaoMapMarkerListItem } from 'vue3-kakao-maps';

const props = defineProps({
  searchKeyword: String,
});

const mapRef = ref(null);
const map = ref<kakao.maps.Map>();
const markerList = ref<KakaoMapMarkerListItem[]>([]);

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

const onLoadKakaoMap = (mapInstance: kakao.maps.Map) => {
  map.value = mapInstance;
  searchPlaces(props.searchKeyword);
};

watch(
  () => props.searchKeyword,
  (newKeyword) => {
    if (map.value) {
      searchPlaces(newKeyword);
    }
  }
);

const searchPlaces = (keyword: string) => {
  const ps = new kakao.maps.services.Places();
  ps.keywordSearch(keyword, placesSearchCB);
};

const placesSearchCB = (data: kakao.maps.services.PlacesSearchResult, status: kakao.maps.services.Status): void => {
  if (status === kakao.maps.services.Status.OK) {
    const bounds = new kakao.maps.LatLngBounds();
    markerList.value = [];

    for (let marker of data) {
      const markerItem: KakaoMapMarkerListItem = {
        lat: Number(marker.y),
        lng: Number(marker.x),
        infoWindow: {
          content: marker.place_name,
          visible: false,
        },
      };
      markerList.value.push(markerItem);
      bounds.extend(new kakao.maps.LatLng(Number(marker.y), Number(marker.x)));
    }

    map.value?.setBounds(bounds, 0, 100, 0, 0);
  }
};

const onClickMapMarker = (markerItem: KakaoMapMarkerListItem): void => {
  markerItem.infoWindow.visible = !markerItem.infoWindow.visible;
};
</script>

<style scoped>
#map {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  filter: grayscale(40%) contrast(75%);
}
</style>
