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
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;

  form {
    div {
      display: inline-block;
      width: 30%;
      min-width: 200px;
      margin: 10px;
    }

    label {
      display: block;
    }

    select,
    input {
      border: 1px solid grey;
    }
  }
}
</style>
