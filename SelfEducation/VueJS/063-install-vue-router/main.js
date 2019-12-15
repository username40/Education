import Vue from 'vue'

import Vuelidate from "vuelidate"
// After install connect use import...
import VueRouter from 'vue-router'
import App from './App.vue'

// and Vue.use
Vue.use(VueRouter)
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})
