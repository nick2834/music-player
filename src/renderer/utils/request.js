import axios from 'axios'

const service = axios.create({
    baseURL: "http://45.77.178.84:3000/",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
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
        if (res.errorCode !== 0) {
            return Promise.reject(new Error(res.errorMsg || 'Error'))
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service