import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 机构列表
    orgList: [],
    // 指标列表
    indexList: []
  },
  mutations: {
    // 初始化获取机构列表
    initOrgList(state, list) {
      state.orgList = list
    },
    // 初始化指标列表
    initIndexList(state, list) {
      state.indexList = list
    }
  },
  actions: {
    // 异步请求获取机构列表
    getOrgList(context) {
      axios.get('/orgList.json').then(({ data }) => {
        console.log(data)
        context.commit('initOrgList', data)
      })
    },
    // 异步请求获取首页指标结果json
    getIndexList(context) {
      axios.get('/indexList.json').then(({ data }) => {
        console.log(data)
        context.commit('initIndexList', data)
      })
    }
  },
  modules: {}
})
