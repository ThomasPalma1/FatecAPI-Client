<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Vue from "vue";
import VueRouter, { RouterView } from "vue-router";

Vue.use(VueRouter);

export default {
  name: "App",
  components: {
    Navbar,
    RouterView,
  },
};
</script>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
