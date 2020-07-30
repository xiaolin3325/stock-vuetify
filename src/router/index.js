import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Realtime from '../components/realtime/realtime'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/realtime',
    name: 'Realtime',
    component: Realtime
  }
]

const router = new VueRouter({
  routes
})

export default router
