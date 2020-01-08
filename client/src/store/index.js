import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: null,
    interval: null,
    currency: null
  },
  getters: {
    value(state) {
      return state.value;
    },
    interval(state) {
      return state.interval;
    },
    currency(state) {
      return state.currency;
    }
  },
  mutations: {
    setValue(state, value) {
      state.value = value;
    },
    setInterval(state, interval) {
      state.interval = interval;
    },
    setCurrency(state, currency) {
      state.currency = currency;
    }
  },
  actions: {
    setValue({ commit }, value) {
      commit("setValue", value);
    },
    setInterval({ commit }, interval) {
      commit("setInterval", interval);
    },
    setCurrency({ commit }, currency) {
      commit("setCurrency", currency);
    }
  }
});
