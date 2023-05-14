<template>
    <button :disabled="disabled" class="btn-secondary" @click="buttonClicked">
        <router-link to="/signup">
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
  

  