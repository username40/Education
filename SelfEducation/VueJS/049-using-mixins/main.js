import Vue from 'vue'
import App from './App.vue'
import List from './List'

// here you can create your filter global
Vue.filter('upperCase', value => value.toUpperCase())

Vue.component('app-list', List)

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
