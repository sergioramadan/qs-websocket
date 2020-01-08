import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 0,
    interval: 5,
    currency: null,
    price: null
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
    },
    price(state) {
      return state.price;
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
    },
    setPrice(state, price) {
      state.price = price;
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
