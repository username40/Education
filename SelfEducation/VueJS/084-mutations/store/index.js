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
  mutations: {
    // mutations take 2 params - state and payload
    // mutations you need to change state
    changeCounter(state, payload) {
      state.counter += payload
    }
  },
  getters: {
    computedCounter(state) {
      return state.counter * 10
    }
  }
})
