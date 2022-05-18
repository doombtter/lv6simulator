import { createStore } from "vuex";

//vuex store
// 

export default createStore({
  //컴포넌트 간에 공유할 data 속성
  state: {
    pra: false,
    nome: false,
    greet: false,
  },
  //동일한 로직을 중앙에서 관리
  getters: {
    getstate(state){
      return state
    }
  },
  //state 값을 변경하는 로직들을 의미
  mutations: {
    changePra(state) {
      state.pra = !state.pra;
    },
    changeNome(state) {
      state.nome = !state.nome;
    },
    changeGreet(state) {
      state.greet = !state.greet;
    }
  }
  //차이점
  //인자를 받아 Vuex 에 넘겨줄 수 있고
  //computed 가 아닌 methods 에 등록
});