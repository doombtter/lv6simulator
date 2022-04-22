import { createStore } from "vuex";

export default createStore({
  state: {
    pra: false
  },
  getters: {
  },
  mutations: {
    changePra(state) {
      state.pra = !state.pra;
    }
  }
});