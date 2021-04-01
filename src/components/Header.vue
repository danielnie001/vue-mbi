<template>
  <div>
    <van-nav-bar :title="msg" fixed>
      <template #left>
        <img src="../assets/img/side01.png" class="sideIcon" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
// 每页头部标题
// 这里可以导入其他文件(比如：组件，工具js，第三方插件js，json文件，图片文件等等)
// 例如：import《组件名称》from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    msg: String
  },
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
.sideIcon {
  width: 25px;
  height: 25px;
}
.van-hairline--bottom {
  border-bottom: 1px solid #e8e8e8 !important;
}
</style>
