import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Topic from '@/views/Topic.vue'
import BoomSeason from '@/views/BoomSeason.vue'
import RealTime from '@/views/RealTime.vue'
import Attention from '@/views/Attention.vue'
import Index from '@/views/Index.vue'
import Login from '@/components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: Index
      },
      {
        path: '/topic',
        component: Topic
      },
      {
        path: '/peek',
        component: BoomSeason
      },
      {
        path: '/real',
        component: RealTime
      },
      {
        path: '/attention',
        component: Attention
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
