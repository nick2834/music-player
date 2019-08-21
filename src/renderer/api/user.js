import request from '@/utils/request';


export function login(data) {
    return request({
        url: `login/cellphone?phone=${data.phone}&password=${data.psw}`,
        method: "get"
    })
}

export function checkStatus() {
    return request({
        url: "login/status",
        method: "get"
    })
}