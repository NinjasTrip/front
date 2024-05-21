import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function postReview(param, success, fail) {
    local.defaults.headers["Authorization"] = sessionStorage.getItem("accessToken");
    await local.post(`/review/write`, param).then(success).catch(fail);
}

async function getReview(placeName, success, fail) {
    local.defaults.headers["Authorization"] = sessionStorage.getItem("accessToken");
    await local.get(`/review/${placeName}`).then(success).catch(fail);
}

export { postReview, getReview };
