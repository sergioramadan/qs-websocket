<template>
  <div id="main-form">
    <form>
      <div class="col-s-1">
        <Input
          name="interval"
          type="number"
          id="interval"
          label="Interval"
          :value="actualInterval"
          @input="setInterval"
        />
      </div>
      <div class="col-s-4">
        <Input
          name="value"
          type="text"
          id="value"
          label="Value"
          :value="actualValue"
          @input="setValue"
        />
      </div>
      <div class="col-s-2">
        <Select
          name="currency"
          id="currency"
          label="Currency"
          :value="actualCurrency"
          @change="setCurrency"
        >
          <option v-for="(currency, id) in currencyList" :key="id" :value="id">
            {{ id }} - {{ currency.symbol }}
          </option>
        </Select>
      </div>
    </form>
  </div>
</template>

<script>
import http from "../services/http.services";
import Input from "./commons/Input";
import Select from "./commons/Select";

export default {
  name: "main-form",
  components: {
    Input,
    Select
  },
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
    setInterval(value) {
      this.$store.dispatch("setInterval", value);
    },
    setValue(value) {
      this.$store.dispatch("setValue", value);
    },
    setCurrency(value) {
      this.$store.dispatch("setCurrency", value);
    }
  },
  async created() {
    this.currencyList = await http.get("CURRENCIES");
    this.setCurrency(Object.keys(this.currencyList)[0]);
  }
};
</script>

<style lang="scss">
#main-form {
  background-color: #ffeeaa;
  padding: 20px;
}
</style>
