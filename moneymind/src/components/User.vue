<template>
  <div class="main">
    <div class="input-container">
      <label for="username">{{ label }}</label>
      <input class="iptlogin" :type="isPassword ? 'password' : 'text'" />
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
  computed: {
    isPassword() {
      const lowercaseLabel = this.label.toLowerCase();
      return lowercaseLabel === "senha" || lowercaseLabel.includes("confirmar a senha");
    },
  },
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login {
  height: 25px;
  font-size: 16px;
  color: black;
  font-weight: 400;
}
.iptlogin {
  width: 783px;
  height: 55px;
  border-radius: 10px;
}
</style>
