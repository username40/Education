import Vue from 'vue'
// also for learn you need connect vue-resource
// import here
import VueResource from 'vue-resource'
import App from './App.vue'
import request from "vue-resource/src/http/request";

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/'

// with interceptors you can modify your requests
// for example add headers
Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})

new Vue({
  el: '#app',
  render: h => h(App),
})
