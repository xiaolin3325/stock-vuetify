import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Realtime from '../components/realtime/container'
import Dashboard from '../components/dashboard/container'
Vue.use(VueRouter)

const routes = [
  {
    path: '/realtime',
    name: 'Realtime',
    component: Realtime,
    meta: { title: '股份趋势' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  routes
})

export default router
