<template>
  <div class="main">
    <div class="login">
      <label for="username">{{ label }}</label>
    </div>
    <div>
      <input class="iptlogin" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "Email",
    },
  },
};
</script>

<style>
.main {
  margin: auto;
}
.login {
  height: 25px;
  font-size: 16px;
  color: black;
  font-weight: 400;
  margin-left: 25%;
  margin-right: 25%;
}
.iptlogin {
  width: 783px;
  height: 55px;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 10px;
}
</style>
