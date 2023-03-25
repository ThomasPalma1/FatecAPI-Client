<template>
  <nav>
    <img alt="Vue logo" class="logo" :src="require('@/assets/logo.svg')" width="100" height="100" />
    <router-link to="/">Dashboard</router-link>
    <router-link to="/panel">Painel</router-link>
    <router-link to="/comparator">Comparador</router-link>
    <Dropdown />
  </nav>
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
  name: 'navbar',
  components: {
    Dropdown
  }
}
</script>

<style>
.logo {
  display: block;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  padding-right: 3.5rem;
  background-color: var(--vt-c-black-soft);
  color: var(--vt-c-white);
  width: 100%;
  font-size: 18px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  border-bottom: 4px solid var(--color-border);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
