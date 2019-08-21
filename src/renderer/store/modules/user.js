import {
    login
} from '@/api/user'

const state = {
    userInfo: sessionStorage.USERINFO ? JSON.parse(sessionStorage.USERINFO) : null
}

const mutations = {
    SET_USER(state, user) {
        state.userInfo = user
    },
    REMOVE_USER(state) {
        state.userInfo = null
    }
}

const actions = {
    login({
        commit
    }, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo).then(({
                data
            }) => {
                commit('SET_USER', data)
                sessionStorage.USERINFO = JSON.stringify(data)
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    },
}

export default {
    state,
    mutations,
    actions
}