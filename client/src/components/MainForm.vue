<template>
  <div id="main-form">
    <form>
      <div class="col-s-5">
        <label for="interval">Interval</label>
        <input
          name="interval"
          type="number"
          id="interval"
          :value="actualInterval"
          @input="setInterval"
        />
      </div>
      <div class="col-s-5">
        <label for="value">Value</label>
        <input
          name="value"
          type="text"
          id="value"
          :value="actualValue"
          @input="setValue"
        />
      </div>
      <div class="col-s-2">
        <label for="currency">Currency</label>
        <select
          name="currency"
          id="currency"
          :value="actualCurrency"
          @change="setCurrency"
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
    setInterval(event) {
      this.$store.dispatch("setInterval", event.target.value);
    },
    setValue(event) {
      this.$store.dispatch("setValue", event.target.value);
    },
    setCurrency(event) {
      this.$store.dispatch("setCurrency", event.target.value);
    }
  },
  async created() {
    this.currencyList = await http.get("CURRENCIES");
    this.$store.dispatch("setCurrency", Object.keys(this.currencyList)[0]);
  }
};
</script>

<style lang="scss">
#main-form {
  background-color: #ffeeaa;
  padding: 20px;
}
</style>
