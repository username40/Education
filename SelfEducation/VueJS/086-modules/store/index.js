// You can split all your store on the small parts
// one file - one task
// Also you can use this file for store with modules
// But i don't recommend you because it is not a good practice if you create scalable app
import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter
  }
})
