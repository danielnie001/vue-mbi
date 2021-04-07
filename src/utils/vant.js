import Vue from 'vue'
import {
  Toast,
  Tabbar,
  TabbarItem,
  Icon,
  Badge,
  NavBar,
  Col,
  Row,
  Popup,
  Cascader,
  Picker,
  Calendar,
  Grid,
  GridItem,
  ActionSheet,
  Divider,
  Collapse,
  CollapseItem
} from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Badge)
Vue.use(NavBar)
Vue.use(Col)
Vue.use(Row)
Vue.use(Popup)
Vue.use(Cascader)
Vue.use(Picker)
Vue.use(Calendar)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(ActionSheet)
Vue.use(Divider)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.prototype.$message = Toast
