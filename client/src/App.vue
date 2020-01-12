<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "qs-ws-exercise",
  components: {
    Home
  },
  methods: {
    disconectSocket() {
      console.log("trigger disconect");
      this.$socket.emit("disconect");
    }
  },
  created() {
    window.addEventListener(
      "beforeunload",
      () => {
        console.log("refreshing");
        this.disconectSocket();
      },
      false
    );
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #ffffee;
}
</style>
