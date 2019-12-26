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
    changeCounter(state, payload) {
      state.counter += payload
    }
  },
  // mutations it is a very good, but you can't use async in mutations
  // for async (for ex. go to server for get data) you should use actions
  actions: {
    // better if you use {whatYouNeed} then write context
    asyncChangeCounter({commit}, payload) {
      setTimeout(() => {
        // now you don't need write context.commit...
        commit('changeCounter', payload.counterValue)
      }, payload.timeOutDelay)
    }
  },
  getters: {
    computedCounter(state) {
      return state.counter * 10
    }
  }
})
