<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      :type="type"
      :id="id"
      :value="value"
      @input="onChange"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    name: {
      type: [String]
    },
    type: {
      type: [String]
    },
    placeholder: {
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
      this.$emit("input", event.target.value);
    }
  }
};
</script>
