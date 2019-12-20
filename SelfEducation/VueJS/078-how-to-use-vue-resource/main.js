import Vue from 'vue'
// also for learn you need connect vue-resource
// import here
import VueResource from 'vue-resource'
import App from './App.vue'

// and use Vue.use
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
})
