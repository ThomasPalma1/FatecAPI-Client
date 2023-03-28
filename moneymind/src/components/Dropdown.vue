<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
      <IconPerfil />
    </a>
    <transition name="fade" apear>
      <div class="sub-menu" v-if="isOpen">
        <div class="menu-item">
          <a>Sair</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import IconPerfil from './icons/IconPerfil.vue';
export default {
  name: 'dropdown',
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
  position: absolute;
  width: 5.25rem;
  padding: 8px;
  background-color: #282A30;
  top: calc(100% + 42px);
  left: 50%;
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
