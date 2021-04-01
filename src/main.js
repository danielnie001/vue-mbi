import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/vant.js'
import './assets/css/global.css'
import axios from 'axios'
// 导入图标css
import './assets/font/iconfont.css'

// axios.defaults.baseURL = 'http://192.168.56.11:80/mbi'

Vue.config.productionTip = false
Vue.prototype.$http = axios
// 时间格式化过滤器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  return `${y}${m}${d}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
