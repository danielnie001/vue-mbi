<template>
  <div>
    <Header msg="驾驶舱" />
    <div class="main-content">
      <!-- 股票信息 -->
      <div class="stock">
        <van-row gutter="80" class="stockRow">
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
    <!-- 指标展示层 -->
    <div class="content-container">
      <van-grid :gutter="10" :column-num="1" :center="false">
        <van-grid-item v-for="(item, i) in indexList" :key="i" class="showIndex">
          <template #default>
            <div>
              <van-collapse v-model="activeNames">
                <van-collapse-item :name="i">
                  <template #title>
                    <span class="detailInfoStyle">{{ item.name }}</span>
                  </template>
                  <!-- 使用组件来细化指标详情 -->
                  <index-vue :details="item"></index-vue>
                </van-collapse-item>
              </van-collapse>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件(比如：组件，工具js，第三方插件js，json文件，图片文件等等)
// 例如：import《组件名称》from '《组件路径》';
import Header from '../components/Header.vue'
import Common from '../components/Common.vue'
import IndexVue from '../components/IndexDetail.vue'
import { mapState } from 'vuex'
export default {
  // import引入的组件需要注入到对象中才能使用

  components: { Header, Common, 'index-vue': IndexVue },
  props: {},
  data() {
    // 这里存放数据
    return {
      activeNames: []
    }
  },
  // 计算属性 类似于data概念
  computed: {
    ...mapState(['indexList'])
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.dispatch('getOrgList')
    this.$store.dispatch('getIndexList')
  }
}
</script>
<style lang="less" scoped>
@media screen and (max-width: 321px) {
  .stock {
    .stockRow {
      margin-left: 2.8%;
    }
    font-size: 13px;
  }
}
@media screen and (min-width: 321px) {
  .stockRow {
    margin-left: 3%;
  }
}
@media screen and (min-width: 376px) {
  .stockRow {
    margin-left: 9%;
  }
}
@media screen and (min-width: 415px) {
  .stockRow {
    margin-left: 27%;
  }
}
@media screen and (min-width: 769px) {
  .stockRow {
    margin-left: 33%;
  }
}
@media screen and (min-width: 1025px) {
  .stockRow {
    margin-left: 37%;
  }
}
.stock {
  display: flex;
  margin-left: 0;
  height: 3.5em;
  width: 100%;
  background-image: url('../assets/img/stockbg.png');
  background-size: 100% 100%;
  align-items: center;
  color: #e5e5e5;
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
.content-container {
  margin-top: 10px;
  margin-bottom: 60px;
  .van-divider {
    margin: 0;
  }
  .detailInfoStyle {
    color: #d81e06;
    font-size: 24px;
  }
}
.showIndex {
  border-radius: 10px;
}
</style>
