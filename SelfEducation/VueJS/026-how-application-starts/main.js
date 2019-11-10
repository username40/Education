import Vue from 'vue'
import App from './App.vue'

// main.js it's a really main file
// everything starts from this file
// take App from imports and use it for render function
new Vue({
  el: '#app',
  render: h => h(App)
})
