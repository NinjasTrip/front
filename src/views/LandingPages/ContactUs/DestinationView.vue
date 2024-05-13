<script setup>
import { ref } from "vue";
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import KakaoMap from "@/components/KakaoMap.vue";

// 데이터를 담을 ref 생성
const selectSido = ref('');
const selectGungu = ref('');
const selectDong = ref('');
const sidoList = ref([
    { sidoCode: '01', sidoName: '서울' },
    { sidoCode: '02', sidoName: '부산' },
    { sidoCode: '03', sidoName: '대구' }
]);
const gunguList = ref([]);
const dongList = ref([]);

// 시도 선택에 따라 군구 데이터 업데이트
const onSidoChange = () => {
    selectGungu.value = '';
    selectDong.value = '';
    dongList.value = [];

    if (selectSido.value === '01') {  // 서울
        gunguList.value = [
            { gunguCode: '0101', gunguName: '강남구' },
            { gunguCode: '0102', gunguName: '서초구' },
            { gunguCode: '0103', gunguName: '종로구' }
        ];
    } else if (selectSido.value === '02') {  // 부산
        gunguList.value = [
            { gunguCode: '0201', gunguName: '해운대구' },
            { gunguCode: '0202', gunguName: '부산진구' },
            { gunguCode: '0203', gunguName: '동래구' }
        ];
    } else if (selectSido.value === '03') {  // 대구
        gunguList.value = [
            { gunguCode: '0301', gunguName: '수성구' },
            { gunguCode: '0302', gunguName: '달서구' },
            { gunguCode: '0303', gunguName: '중구' }
        ];
    }
};

// 군구 선택에 따라 동 데이터 업데이트
const onGunguChange = () => {
    if (selectGungu.value === '0101') {  // 강남구
        dongList.value = [
            { dongCode: '010101', dongName: '논현동' },
            { dongCode: '010102', dongName: '역삼동' }
        ];
    } else if (selectGungu.value === '0201') {  // 해운대구
        dongList.value = [
            { dongCode: '020101', dongName: '중동' },
            { dongCode: '020102', dongName: '우동' }
        ];
    } else if (selectGungu.value === '0301') {  // 수성구
        dongList.value = [
            { dongCode: '030101', dongName: '범어동' },
            { dongCode: '030102', dongName: '수성동' }
        ];
    }
};
</script>


<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <DefaultNavbar class="background" style="height: 70px; background-color: white; border-radius: 10px;" />
            </div>
        </div>
    </div>
    <div class="page-header z-index-0">
        <KakaoMap />
    </div>
    <div id="searchBox" class="card custom-search-box">
        <div class="p-2">
            <div class="d-flex">
                <i class="fa fa-search"></i>
                <h6 class="ps-2">지역을 선택하세요</h6>
            </div>
            <div class="pb-2 d-flex justify-content-evenly">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <fieldset>
                        <select v-model="selectSido" @change="onSidoChange" class="form-control form-select">
                            <option value="">시도 선택</option>
                            <option v-for="sido in sidoList" :key="sido.sidoCode" :value="sido.sidoCode">{{
                                sido.sidoName }}</option>
                        </select>
                    </fieldset>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <fieldset>
                        <select v-model="selectGungu" @change="onGunguChange" class="form-control form-select">
                            <option value="">군구 선택</option>
                            <option v-for="gungu in gunguList" :key="gungu.gunguCode" :value="gungu.gunguCode">{{
                                gungu.gunguName }}</option>
                        </select>
                    </fieldset>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <fieldset>
                        <select v-model="selectDong" class="form-control form-select">
                            <option value="">동 선택</option>
                            <option v-for="dong in dongList" :key="dong.dongCode" :value="dong.dongCode">{{
                                dong.dongName }}</option>
                        </select>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-search-box {
    position: absolute;
    top: 150px;
    left: 35px;
    width: 400px;
    height: 150px;
    background-color: rgba(255, 255, 255);
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}
</style>
