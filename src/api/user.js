import { localAxios } from "@/util/http-commons";

const local = localAxios();

function listArticle(param, success, fail) {
    local.post(`/users/login`, JSON.stringify(param)).then(success).catch(fail);
}

export { listArticle };
