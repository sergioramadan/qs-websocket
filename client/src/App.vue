<template>
  <div id="app">
    <h1>Websocket Exercise</h1>

    <form>
      <div>
        <label for="interval">Interval</label>
        <input
          name="interval"
          type="number"
          id="interval"
          :value="actualInterval"
          @keuyp="setInterval"
        />
      </div>
      <div>
        <label for="value">Value</label>
        <input
          name="value"
          type="text"
          id="value"
          :value="actualValue"
          @keyup="setValue(this.value)"
        />
      </div>
      <div>
        <label for="currency">Currency</label>
        <select
          name="currency"
          id="currency"
          :value="actualCurrency"
          @change="setCurrency(this.value)"
        >
          <option></option>
        </select>
      </div>
    </form>
    <div>
      <p>The amount of Bitcoins for {{ currency }} {{ value }}</p>
      <h2>[ RESULT ]</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "qs-ws-exercise",
  computed: {
    currencyList() {
      return this.$store.getters.currencyList;
    },
    actualValue() {
      return this.$store.getters.value;
    },
    actualCurrency() {
      return this.$store.getters.currency;
    },
    actualInterval() {
      return this.$store.getters.interval;
    }
  },
  methods: {
    setInterval(interval) {
      this.$store.dispatch("setInterval", interval);
    },
    setValue(value) {
      this.$store.dispatch("setValue", value);
    },
    setCurrency(currency) {
      this.$store.dispatch("setCurrency", currency);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

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
</style>
