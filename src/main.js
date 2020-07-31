import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import global from './config/appconfig'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Vueaxios,axios)
Vue.prototype.$ajax = axios
Vue.prototype.global = global
axios.defaults.baseURL = global.baseURL
Vue.prototype.global = global
Vue.prototype.$ajax = axios

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
