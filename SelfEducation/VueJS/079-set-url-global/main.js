import Vue from 'vue'
// also for learn you need connect vue-resource
// import here
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

// Here You can set your root url to server
// after it you just need to write where get your data
Vue.http.options.root = 'http://localhost:3000/'

new Vue({
  el: '#app',
  render: h => h(App),
})
