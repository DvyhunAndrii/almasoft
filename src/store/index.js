import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
    white: false,
  },
  getters: {
    visShow(state) {
      return state.show;
    },
    // visWhite(state) {
    //   return state.white;
    // },
  },
  mutations: {
    changeShow(state) {
      state.show = !state.show;
    },
    // addWhite(state) {
    //   state.white = true;
    // },
    // removeWhite(state) {
    //   state.white = false;
    // },
  },
  actions: {},
  modules: {},
});
