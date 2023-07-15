import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
  },
  getters: {
    visShow(state) {
      return state.show;
    },
  },
  mutations: {
    changeShow(state) {
      state.show = !state.show;
    },
  },
  actions: {},
  modules: {},
});
