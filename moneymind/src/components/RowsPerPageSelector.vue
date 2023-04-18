<template>
  <div>
    <label for="rowsPerPageSelect">Mostrar</label>
    <select
      id="rowsPerPageSelect"
      v-model="selectedOption"
      @change="emitOptionChanged"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <label for="rowsPerPageSelect">linhas por pagina</label>
  </div>
</template>

<script lang="ts">
import arrowDownUp from "@/assets/arrowDownUp.svg";

export default {
  props: {
    selectedOption: {
      type: Number,
    },
  },
  data() {
    return {
      options: [10, 20, 50],
      selectedOption: 20,
      iconUrl: arrowDownUp,
    };
  },
  methods: {
    emitOptionChanged() {
      this.$emit("option-changed", this.selectedOption);
    },
  },
  mounted() {
    if (this.selectedOption === null || this.selectedOption === undefined) {
      this.selectedOption = this.options[0]; // Define a primeira opção como padrão
    }
  },
};
</script>

<style>
select {
  width: auto;
  display: inline-block;
  font-size: 16px;
  padding: 10px 30px 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 8px;
  outline: none;
  color: var(--color-text);
  background: #fff url("../assets/arrowDownUp.svg") right 0.05rem center/ 30px
    15px no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
