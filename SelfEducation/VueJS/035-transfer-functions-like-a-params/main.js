import Vue from 'vue'
import App from './App.vue'
// When you need a global you can write import here...
import Car from './Car'

// In Vue you have a 2 ways to register components - global and local
// I prefer local

// ... and register your component
Vue.component('app-car', Car)
// now you an call your component in the any part of your app


new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
