<template>
  <div>
    <van-tabbar v-model="active" border fixed active-color="#d81e06" route>
      <van-tabbar-item to="/index">
        <span>首页</span>
        <template #icon="props">
          <van-icon
            class="iconfont"
            size="28"
            class-prefix="icon"
            :name="props.active ? 'shouye-' + icon.active : 'shouye-' + icon.inactive"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/topic">
        <span>专题</span>
        <template #icon="props">
          <van-icon
            class="iconfont"
            size="28"
            class-prefix="icon"
            :name="props.active ? 'jilu-' + icon.active : 'jilu-' + icon.inactive"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item badge="new" to="/peek">
        <span>旺季</span>
        <template #icon="props">
          <van-icon class="iconfont" size="28" class-prefix="icon" name="huo" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/real">
        <span>实时</span>
        <template #icon="props">
          <van-icon
            class="iconfont"
            size="28"
            class-prefix="icon"
            :name="props.active ? 'shishishujubukedianji' : 'shishishuju'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/attention">
        <span>关注</span>
        <template #icon="props">
          <van-icon
            class="iconfont"
            size="28"
            class-prefix="icon"
            :name="props.active ? 'shoucang-' + icon.active : 'shoucang-' + icon.inactive"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// 这里可以导入其他文件(比如：组件，工具js，第三方插件js，json文件，图片文件等等)
// 例如：import《组件名称》from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    // 这里存放数据
    return {
      active: 0,
      icon: {
        active: 'mianxing',
        inactive: 'xianxing'
      }
    }
  },
  // 计算属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问dom元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
.van-tabbar {
  background-color: #f2f2f2;
  .van-tabbar-item--active {
    background-color: #f2f2f2;
  }
}
.van-hairline--top-bottom{
  border-bottom: 1px solid #e8e8e8 !important;
}
</style>
