import Vue from 'vue'
import { Toast, Tabbar, TabbarItem, Icon, Badge } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Badge)

Vue.prototype.$message = Toast
