import axios from 'axios'

const service = axios.create({
    baseURL: "http://45.77.178.84:3000/",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'X-Real-IP': "211.161.244.70"
    }
})
axios.defaults.withCredentials = true
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
        return Promise.resolve(response)
    },
    error => {
        return Promise.reject(error)
    }
)

export default service