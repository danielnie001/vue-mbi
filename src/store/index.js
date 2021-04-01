import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 机构列表
    orgList: []
  },
  mutations: {
    // 初始化获取机构列表
    initOrgList(state, list) {
      state.orgList = list
    }
  },
  actions: {
    // 异步请求获取机构列表
    getOrgList(context) {
      axios.get('/orgList.json').then(({ data }) => {
        console.log(data)
        context.commit('initOrgList', data)
      })
    }
  },
  modules: {}
})
