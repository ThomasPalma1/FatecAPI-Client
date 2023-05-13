<template>
  <button :disabled="disabled" class="btn-secondary" @click="buttonClicked">
    <router-link to="/login">
      {{ label1 }}
    </router-link>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label1: {
      type: String,
      default: "Login",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    class: {
      type: String,
      default: "btn-primary",
    },
    onClick: {
      type: Function,
      default: () => { },
    },
  },
  methods: {
    buttonClicked() {
      this.onClick();
    },
  },
};
</script>

<style>
button a.router-link-exact-active {
  color: black;
}

button a.router-link-exact-active:hover {
  background-color: transparent;
}

button a {
  display: inline-block;
  padding: 0 1rem;
}

.btn-secondary {
  height: 60px;
  width: 300px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background: #f4bf35;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #000000;
  font-weight: 400;
  letter-spacing: 1px;
  transition: 0.5s;
  margin-left: 19%;
}

.btn-primary:hover {
  background: #a09e9c;
  border: none;
  outline: none;
}
</style>
