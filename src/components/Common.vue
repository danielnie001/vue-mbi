<template>
  <div>
    <!-- 机构、币种、日期选择 -->
    <div class="organization">
      <van-row>
        <van-col span="6">
          <div class="box orgBox" @click="showOrgDialog = true">{{ orgName }}</div>
        </van-col>
        <van-col span="7" offset="1">
          <div class="box currBox" @click="showCurrency = true">{{ currency }}</div>
        </van-col>
        <van-col span="9">
          <img src="../assets/img/dateLeft.png" class="leftImg" @click="subOneDay" />
          <div
            class="box dateBox"
            :style="{ width: isShowRight ? '80px' : '110px' }"
            @click="showDate = true"
          >
            <span>{{ currDate | dateFormat }}</span>
          </div>
          <img
            src="../assets/img/dateRight.png"
            class="rightImg"
            @click="addOneDay"
            v-if="isShowRight"
          />
        </van-col>
      </van-row>
    </div>

    <!-- 机构选择弹出层 -->
    <van-popup v-model="showOrgDialog" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择机构"
        :options="orgList"
        :field-names="fieldNames"
        @close="showOrgDialog = false"
        @finish="onFinish"
        @change="orgValueChange"
      />
    </van-popup>

    <!-- 币种切换 -->
    <van-popup v-model="showCurrency" round position="bottom">
      <van-picker
        title="请选择币种"
        show-toolbar
        :columns="columns"
        @cancel="showCurrency = false"
        @confirm="onCurrencyConfirm"
      />
    </van-popup>

    <!-- 切换日期组件 -->
    <van-calendar
      :show-confirm="false"
      v-model="showDate"
      @confirm="onDateConfirm"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>

<script>
// 这里可以导入其他文件(比如：组件，工具js，第三方插件js，json文件，图片文件等等)
// 例如：import《组件名称》from '《组件路径》';
import { mapState } from 'vuex'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    // 这里存放数据
    return {
      showOrgDialog: false,
      fieldValue: '',
      cascaderValue: '',
      // 当前机构
      orgName: '总行',
      // 当前币种
      currency: '折人民币',
      orgDialog: false,
      fieldNames: {
        text: 'branchName',
        value: 'branchId',
        children: 'children'
      },
      // 币种数据
      columns: ['人民币', '折人民币'],
      // 是否显示币种选择弹框
      showCurrency: false,
      // 日期选择
      showDate: false,
      currDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      isShowRight: false
    }
  },
  // 计算属性 类似于data概念
  computed: {
    ...mapState(['orgList'])
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onFinish({ selectedOptions }) {
      this.showOrgDialog = false
      this.orgName = selectedOptions[selectedOptions.length - 1].branchName
    },
    // 点击选择机构时触发
    orgValueChange({ selectedOptions }) {
      this.orgName = selectedOptions[selectedOptions.length - 1].branchName
    },
    // 点击币种切换按钮确定时触发
    onCurrencyConfirm(value) {
      this.currency = value
      this.showCurrency = false
    },
    // 点击日期确定按钮时触发
    onDateConfirm(date) {
      this.showDate = false
      this.currDate = date
      if (
        new Date(this.currDate).getDate() ===
        new Date(new Date().getTime() - 24 * 60 * 60 * 1000).getDate()
      ) {
        this.isShowRight = false
      } else {
        this.isShowRight = true
      }
    },
    // 点击左箭头
    subOneDay() {
      this.currDate = this.currDate - 24 * 60 * 60 * 1000
      if (new Date(this.currDate).getDate() !== new Date().getDate()) {
        this.isShowRight = true
      }
    },
    // 点击右箭头
    addOneDay() {
      this.currDate = this.currDate + 24 * 60 * 60 * 1000
      if (
        new Date(this.currDate).getDate() ===
        new Date(new Date().getTime() - 24 * 60 * 60 * 1000).getDate()
      ) {
        this.isShowRight = false
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {}
}
</script>
<style lang="less" scoped>
// 机构样式表
.organization {
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 0 8px 0;
  margin-top: 5px;
  padding-left: 20px;
  font-size: 14px;
  .box {
    height: 20px;
    background-color: #e8e8e8;
    text-align: center;
  }
  .orgBox {
    width: 80px;
    overflow: hidden;
  }
  .currBox {
    width: 80px;
  }
  .dateBox {
    display: inline-block;
    vertical-align: 6px;
    line-height: 20px;
    width: 80px;
  }
  .isShowRight {
    width: 120px;
  }
  img {
    display: inline-block;
    width: 18px;
    height: 20px;
  }
  .leftImg {
    margin-right: 5px;
  }
  .rightImg {
    margin-left: 5px;
  }
}
</style>
