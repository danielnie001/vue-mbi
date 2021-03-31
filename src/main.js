import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/vant.js'
import axios from 'axios'
// 导入图标css
import './assets/font/iconfont.css'

axios.defaults.baseURL = 'http://192.168.56.11:80/mbi'

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
