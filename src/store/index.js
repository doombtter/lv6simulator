import { createStore } from "vuex";

export default createStore({
  state: {
    pra: false,
    nome: false,
    greet: false,
    breakedtile : 0
  },
  getters: {
    getstate(state){
      return state
    }
  },
  mutations: {
    changePra(state) {
      state.pra = !state.pra;
    },
    changeNome(state) {
      state.nome = !state.nome;
    },
    changeGreet(state) {
      state.greet = !state.greet;
    },
    btplus(state){
      state.breakedtile ++
    },
    btminus(state){
      state.breakedtile --
    },
    btreset(state){
      state.breakedtile = 0
    }
  }
});