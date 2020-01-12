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
    setValue({ commit, state }, value) {
      commit("setValue", value);
      let data = {
        currency: state.currency,
        interval: state.interval,
        value
      };
      this._vm.$socket.emit("watch", data);
    },
    setInterval({ commit, state }, interval) {
      commit("setInterval", interval);
      let data = {
        currency: state.currency,
        interval: interval,
        value: state.value
      };
      this._vm.$socket.emit("watch", data);
    },
    setCurrency({ commit, state }, currency) {
      commit("setCurrency", currency);
      let data = {
        currency: currency,
        interval: state.interval,
        value: state.value
      };
      this._vm.$socket.emit("watch", data);
    },
    socket_setPrice({ commit }, price) {
      commit("setPrice", price);
    }
  }
});
