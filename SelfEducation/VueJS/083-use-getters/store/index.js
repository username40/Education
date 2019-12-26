// then you should create directory - store and then create a main file index.js
// import here vue and vuex
// and use it via Vue.use
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  // getters can help you avoid code repeating
  // it is a very simple
  getters: {
    computedCounter(state) {
      return state.counter * (7 - 2 * (5 + 4))
    }
  }
})
