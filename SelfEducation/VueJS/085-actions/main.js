import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
// install vuex is a very simple - npm i --save vuex
import store from './store/index.js'
import request from "vue-resource/src/http/request";

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/'

Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
})
