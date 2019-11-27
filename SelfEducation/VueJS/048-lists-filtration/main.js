import Vue from 'vue'
import App from './App.vue'


// here you can create your filter global
Vue.filter('upperCase', value => value.toUpperCase())

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
