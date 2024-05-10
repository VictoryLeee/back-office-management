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
      nickname: state => state.userInfo.nickname, // 昵称
      username: state => state.userInfo.username, // 用户名
      user_pic: state => state.userInfo.user_pic // 用户头像
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
