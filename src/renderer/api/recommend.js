import request from '@/utils/request';


export function resource(){
    return request({
        url:"recommend/resource",
        method:"get"
    })
}