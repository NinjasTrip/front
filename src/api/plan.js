import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function postPlan(param, success, fail) {
    await local.post(`/plan/create`, param).then(success).catch(fail);
}

export { postPlan };
