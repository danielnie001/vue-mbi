<template>
  <div>
    <div class="value">
      <span>{{ getValue }}</span>
    </div>
    <div class="compareMonth">
      <span style="color:#000">{{ struct.compare + ' : ' }}</span>
      <span :style="{ color: monthColor, fontSize: fontSize + 'px' }">{{ getCompareMonth }}</span>
    </div>
    <div class="compareYear" v-if="struct.compare2 !== undefined">
      <span style="color:#000">{{ struct.compare2 + ' : ' }}</span>
      <span :style="{ color: yearColor, fontSize: fontSize + 'px' }">{{ getCompareYear }}</span>
    </div>
  </div>
</template>

<script>
// 指标详情页面组件

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    details: Object
  },
  data() {
    // 这里存放数据
    return {
      /** "records": [
      {
        "当前余额": "1352.890000",
        "比上月": "1352.890000",
        "比年初": "157.720000",
        "比累计年日均": "41.820000",
        "单位": "亿"
      }
      ] */
      records: this.details.records[0],
      // { "compare": "比上月", "unit": "单位", "value": "当前余额", "compare2": "比年初" },
      struct: this.details.struct,
      fontSize: 16
    }
  },
  // 计算属性 类似于data概念
  computed: {
    getValue() {
      var value = Number(this.records[this.struct.value])
      value = value
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return value + ' ' + this.records[this.struct.unit]
    },
    getCompareMonth() {
      var compare = Number(this.records[this.struct.compare])
      compare = compare
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      if (this.records[this.struct.unit2] !== undefined) {
        return compare + ' ' + this.records[this.struct.unit2]
      }
      return compare + ' ' + this.records[this.struct.unit]
    },
    monthColor() {
      var compare = Number(this.records[this.struct.compare])
      if (compare > 0) {
        return 'red'
      }
      return 'green'
    },
    getCompareYear() {
      var compare = Number(this.records[this.struct.compare2])
      compare = compare
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return compare + ' ' + this.records[this.struct.unit]
    },
    yearColor() {
      var compare = Number(this.records[this.struct.compare2])
      if (compare > 0) {
        return 'red'
      }
      return 'green'
    }
  },
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
.value {
  display: inline-block;
  color: #3383ef;
  font-size: 22px;
}
</style>
