<template>
  <div>
    <h1></h1>
    <MainForm />
    <MainResult />
  </div>
</template>

<script>
import MainForm from "../components/MainForm";
import MainResult from "../components/MainResult";

export default {
  name: "Home",
  components: {
    MainForm,
    MainResult
  }
};
</script>
