import Vue from 'vue'
import App from './App.vue'

// first - export const with a new Vue
export const EventEmitter = new Vue()

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
