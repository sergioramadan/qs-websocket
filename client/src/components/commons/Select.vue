<template>
  <div>
    <label :for="name">{{ label }}</label>
    <select :name="name" :id="id" :value="value" @change="onChange">
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    name: {
      type: [String]
    },
    label: {
      type: [String]
    },
    id: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    }
  },
  methods: {
    onChange(event) {
      this.$emit("change", event.target.value);
    }
  }
};
</script>
