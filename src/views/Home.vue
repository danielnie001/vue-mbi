<template>
  <div class="home">
    <router-view/>
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
