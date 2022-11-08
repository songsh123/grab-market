import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/components/Home'
import Detail from '@/components/Detail'
import Upload from '@/components/Upload'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/upload',
    component: Upload
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
