import axios from 'axios'
import router from '@/router'
const service = axios.create({
    baseURL: "http://45.77.178.84:3000/",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// request interceptor
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(response)
        return Promise.resolve(response)
    },
    error => {
        console.log(error)
        router.push('/login')
    }
)

export default service