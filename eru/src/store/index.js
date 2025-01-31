import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  plugins: [createPersistedState()],
  mutations: {
    setCurrentUser(state, payload){
      state.currentUser = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
