import Vue from 'vue'
// After install connect use import...
import Vuelidate from "vuelidate"
import App from './App.vue'

// and Vue.use
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})
