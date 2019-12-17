import Vue from 'vue'
import Vuelidate from "vuelidate"
import VueRouter from 'vue-router'
import App from './App.vue'
// then you need to create and import .js file with your router parametres
import router from "./routes";

Vue.use(VueRouter)
Vue.use(Vuelidate)

// After import router library you need to add it here
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
