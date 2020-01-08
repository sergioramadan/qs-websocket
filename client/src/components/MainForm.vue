<template>
  <div id="main-form">
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
          <option v-for="(currency, id) in currencyList" :key="id" :value="id">
            {{ currency.symbol }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import http from "../services/http.services";

export default {
  name: "main-form",
  data() {
    return {
      currencyList: {}
    };
  },
  computed: {
    //currencyList() {
    //  return this.$store.getters.currencyList;
    //},
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
  },
  async created() {
    this.currencyList = await http.get("CURRENCIES");
  }
};
</script>

<style lang="scss">
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
