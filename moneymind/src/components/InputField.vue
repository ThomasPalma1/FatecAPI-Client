<template>
  <div class="input-container">
    <label class="label-input-field">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" v-model="inputValue" required class="input-field"/>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: '',
    };
  },
};
</script>

<style>
.input-container {
  display: flex;
  flex-direction: column;
  margin: 12px;
}

.input-field {
  width: 400px;
  display: flex;
  font-size: 16px;
  padding: 10px 30px 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 8px;
  outline: none;
  color: var(--color-text);
}

.label-input-field {
  align-self: flex-start;
}
</style>