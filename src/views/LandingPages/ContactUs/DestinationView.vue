<script setup>
import { ref } from "vue";
import { Modal } from 'bootstrap';
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import KakaoMap from "@/components/KakaoMap.vue";
import ReviewInsertModal from '@/components/ReviewInsertModal.vue';
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";





// 데이터를 담을 ref 생성
const searchKeyword = ref('');
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
    <div id="searchBox" class="card custom-search-box ">
        <div class="p-2">
            <div class="d-flex align-items-center">
                <i class="fa fa-search"></i>
                <span class="ps-2" style="font-size: 1rem;">주소 검색 및 키워드 검색</span>
            </div>
            <div class="p-3 pb-2 d-flex justify-content-evenly">
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


            <MaterialInput class="input-group-dynamic mb-4" icon="search" type="text" placeholder="Search" />


            <div class="col-md-12">
                <MaterialButton type="submit" variant="gradient" color="secondary" fullWidth>Search</MaterialButton>
            </div>
        </div>
    </div>


    <div id="showList" class="card p-0">


        <!-- 관광지 정보 요약 -->
        <div class="bg-white mb-2">
            <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
                <h4 class="m-0">Sunshine Apartments</h4>
                <button class="px-1">❤️</button>
            </div>
            <!-- contents -->
            <div class="px-3">
                <div class="border-bottom d-flex py-2">
                    <div class="text-secondary w-25">주소</div>
                    <div>Jongno-gu 123-45</div>
                </div>
                <div class="d-flex py-2">
                    <div class="text-secondary w-25">건축년도</div>
                    <div>2005</div>
                </div>
            </div>
            <div class="d-flex py-2 justify-content-center">
                <MaterialButton type="submit" variant="gradient" color="secondary">
                    Add to My Plan
                </MaterialButton>
            </div>

        </div>
        <div class="py-1 bg-secondary"></div>
        <!-- 거주민 리뷰 -->
        <div class="bg-white mb-2">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="p-3 m-0">관광객 리뷰</h5>
                <i class="bi bi-plus-circle px-3 cursor-pointer">+</i>
            </div>

            <div class="border-top border-bottom d-flex align-items-center p-2">
                <div class="text-secondary ps-2 pe-3">
                    <img class="avatar rounded-circle" width="25px"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBg
                        kIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5O
                        jcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc
                        3Nzc3N//AABEIAL0AygMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBgcFAAj/xABBEAACAQIEA
                        wUECAQFAwUAAAABAgMAEQQFEiETMUEGIjJRcQczYYEUI1KRobHB8BVCYnJDgpLR4Qgk8RY0U6Ky/8QAGgEBAAMBA
                        QEAAAAAAAAAAAAAAAIDBAEFBv/EACURAAICAgICAgEFAAAAAAAAAAABAhEDIRIxBFETQSMiMkJhcf/aAAwDAQACEQMRAD8
                        A2SL3q1MNA6KFJAsRUbW23e60ANTY/dr6Ck0KdyoNRndg5AZgAelALP7xvQU7hfCfWvRKpjuVBJ86CdihAQab0AuK8K+tBB775UU
                        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">
                </div>
                <div class="d-flex flex-column">
                    <h6 class="m-0">John Doe</h6>
                    <div class="text-secondary" style="font-size: 0.9rem;">2023.4.10 가입</div>
                </div>
            </div>
            <div class="px-3">
                <div class="border-bottom d-flex py-2 text-danger">
                    <div class="w-25">추천점수</div>
                    <div>⭐⭐⭐⭐</div>
                </div>
                <div class="border-bottom d-flex py-2">
                    <div class="text-secondary w-25">교통요건</div>
                    <div>⭐⭐⭐</div>
                </div>
                <div class="border-bottom d-flex py-2">
                    <div class="text-secondary w-25">관광환경</div>
                    <div>⭐⭐⭐⭐⭐</div>
                </div>
                <div class="border-bottom d-flex py-2">
                    <div class="text-secondary w-25">음식환경</div>
                    <div>⭐⭐⭐⭐</div>
                </div>
                <div class="pt-2 text-secondary">종합의견</div>
                <div class="py-2">
                    <h6>Great place to trip I really Love this place</h6>
                </div>
            </div>
        </div>
        <div class="py-1 bg-secondary"></div>

        <!-- 매물정보 -->
        <div class="bg-white mb-2">
            <div class="border-bottom">
                <h5 class="p-3 m-0">DiaryList</h5>
            </div>
            <div>
                <table class="w-100">
                    <thead class="bg-secondary text-white">
                        <tr>
                            <td class="ps-3 py-1">타입</td>
                            <td class="w-50">제목</td>
                            <td>거래가격</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody class="px-2">
                        <tr class="border-bottom">
                            <td colspan="3" class="ps-3 py-2">등록된 매물이 없습니다.</td>
                        </tr>
                        <tr class="border-bottom">
                            <td class="ps-3 py-2">Sale</td>
                            <td>Nice apartment</td>
                            <td>600M</td>
                            <td>
                                <button>❤️</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-search-box {
    position: absolute;
    top: 40px;
    left: 15px;
    width: 400px;
    height: 250px;
    background-color: rgba(255, 255, 255);
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}

#showList {
    position: absolute;

    top: 40px;
    bottom: 20px;
    right: 15px;

    width: 400px;
    padding: 10px;

    z-index: 100;
    /* background-color:rgba(255, 244, 244, 0.8); */
    /* opacity: 0.5; */

    overflow-y: auto;
}

.bi-plus-circle {
    font-size: 1.5rem;
}

.bi-plus-circle:hover {
    color: dodgerblue;
}
</style>
