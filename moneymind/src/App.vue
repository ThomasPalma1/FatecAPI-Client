<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
