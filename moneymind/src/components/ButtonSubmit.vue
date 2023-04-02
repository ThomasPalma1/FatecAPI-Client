<template>
  <button :disabled="disabled" class="btn-primary" @click="buttonClicked">
    {{ label }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "Enviar",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    class: {
      type: String,
      default: "btn btn-primary",
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    buttonClicked() {
      this.onClick();
    }
  },
};
</script>

<style>
.btn-primary {
  height: 50px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background: #363131;
  border: 0px solid;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 400;
  letter-spacing: 1px;
  transition: 0.5s;
}

.btn-primary:hover{
  background: #A09E9C;
}

</style>
