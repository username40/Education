import Vue from 'vue'
import App from './App.vue'
// import your directive
import ColorDirective from './color.js'

// call it
Vue.directive('colored', ColorDirective)

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
