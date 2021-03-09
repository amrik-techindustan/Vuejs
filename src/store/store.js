import { Vue } from 'vue-property-decorator'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: (state, payload) => {
      state.count = state.count + payload.amount;
    },
    decrement: (state, payload) => {
      state.count = state.count - payload.amount;
    }
  },
  actions: {
    increment: (context, payload) => {
      context.commit('increment', payload)
    },
    decrement: (context, payload) => {
      context.commit('decrement', payload)
    }
  }
})

export default store
/* eslint-disable-line */