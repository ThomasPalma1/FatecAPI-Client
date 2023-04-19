<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
      <IconPerfil />
    </a>
    <transition name="fade" apear>
      <div class="sub-menu" v-if="isOpen">
        <div class="menu-item">
          <nav>
            <div>
              <router-link to="/login">Login/Cadastro</router-link>
            </div>
          </nav>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import IconPerfil from "./icons/IconPerfil.vue";
export default {
  name: "dropdown",
  props: {
    title: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    IconPerfil,
  },
};
</script>

<style>
.menu-item .sub-menu {
  z-index: 1;
  position: absolute;
  width: 12.25rem;
  padding: 6px;
  background-color: #282a30;
  top: calc(100% + 42px);
  left: 30%;
  transform: translateX(-50%);
}

a.menu-item .sub-menu {
  color: var(--color-text);
  border-bottom: 4px solid var(--color-border);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.sub-menu {
  cursor: pointer;
}
</style>
