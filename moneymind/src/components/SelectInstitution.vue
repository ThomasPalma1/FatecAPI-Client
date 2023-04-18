<template>
  <div class="selectdiv">
    <label class="selectLabel">Pessoa</label>
    <select v-model="selectedOption" @change="handleOptionChange">
      <option value="">Selecione uma opção</option>
      <option v-for="option in userOptions" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: "dropdown",
  data() {
    return {
      options: [],
      selectedOption: "",
      peopleType: "",
      userOptions: [
        { label: "Pessoa Fisica", value: "fisica" },
        { label: "Pessoa Juridica", value: "juridica" },
      ],
    };
  },
  methods: {
    handleOptionChange(event: any) {
      this.selectedOption = event.target.value;

      this.getTypePeople(this.selectedOption);
    },
    getTypePeople(value: string) {
      if (value) {
        if (value === "fisica") {
          this.peopleType = "Pessoa Fisica";
        } else {
          this.peopleType = "Pessoa Juridica";
        }

        this.$emit("chart-change", this.peopleType);
      }
    },
  },
  watch: {
    // whenever selectedOption changes, this function will run
    selectedOption(newValue, oldValue) {
      if (newValue !== this.selectedOption) {
        () => this.getTypePeople(newValue);
      }
    },
  },
};
</script>
