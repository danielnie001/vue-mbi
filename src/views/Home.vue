<template>
  <div class="home">
    <!-- 路由视图 -->
    <router-view/>
    <!-- 底部tabBar -->
    <TabBar/>
  </div>
</template>

<script>
// 首页
import TabBar from '@/components/TabBar.vue'
export default {
  name: 'Home',
  components: {
    TabBar
  }
}
</script>
