import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { getUserInfoAPI } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      token: '',
      userInfo: {} // 定义用户信息对象
    },
    getters: {
    },
    mutations: {
      updateToken (state, newToken) {
        state.token = newToken
      },
      updateUserInfo (state, info) {
        state.userInfo = info
      }
    },
    actions: {
      async initUserInfo (store) {
        const { data: res } = await getUserInfoAPI()
        if (res.code === 0) {
          store.commit('updateUserInfo', res.data)
        }
      }
    },
    modules: {
    },
    plugins: [createPersistedState()]
  }
)
