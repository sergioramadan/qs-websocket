<template>
  <div id="app">
    <div>
      <p>The amount of Bitcoins for {{ currency }} {{ value }}</p>
      <h2>[ RESULT ]</h2>
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

<style lang="scss"></style>
