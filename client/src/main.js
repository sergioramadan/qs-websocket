import Vue from "vue";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:4000", //options object is Optional
    vuex: {
      store,
      actionPrefix: "socket_",
      mutationPrefix: "socket_"
    }
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
