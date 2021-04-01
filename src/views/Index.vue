<template>
  <div>
    <Header msg="驾驶舱" />
    <div class="main-content">
      <!-- 股票信息 -->
      <div class="stock">
        <van-row gutter="80">
          <van-col span="12">
            <span>股价:601128(SHA)</span>
          </van-col>
          <van-col span="12">
            <span id="stockNum1">00.00 0.00 (0.00%)</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 通用机构，币种，日期组件 -->
    <Common />
  </div>
</template>

<script>
// 这里可以导入其他文件(比如：组件，工具js，第三方插件js，json文件，图片文件等等)
// 例如：import《组件名称》from '《组件路径》';
import Header from '../components/Header.vue'
import Common from '../components/Common.vue'
export default {
  // import引入的组件需要注入到对象中才能使用

  components: { Header, Common },
  props: {},
  data() {
    // 这里存放数据
    return {}
  },
  // 计算属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.dispatch('getOrgList')
  }
}
</script>
<style lang="less" scoped>
.stock {
  display: flex;
  margin-left: 0;
  padding-left: 4%;
  height: 3.5em;
  width: 100%;
  background-image: url('../assets/img/stockbg.png');
  background-size: 100% 100%;
  align-items: center;
  color: #e5e5e5;
  font-size: 16px;
  span {
    display: block;
    width: 100%;
    text-align: center;
    :first-child {
      padding-left: 10px;
    }
  }
  #stockNum1 {
    margin-top: 2px;
    white-space: nowrap;
  }
}
</style>
