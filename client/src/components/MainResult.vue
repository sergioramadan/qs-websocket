<template>
  <div id="app">
    <div>
      <p>
        The amount of Bitcoins for <b>{{ actualCurrency }} {{ actualValue }}</b>
      </p>
      <span class="actualPrice">{{ actualPrice }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-result",
  computed: {
    actualValue() {
      return this.$store.getters.value;
    },
    actualCurrency() {
      return this.$store.getters.currency;
    },
    actualPrice() {
      return this.$store.getters.price;
    }
  }
};
</script>

<style lang="scss">
.actualPrice {
  font-size: 64px;
  font-weight: bold;
}
</style>
