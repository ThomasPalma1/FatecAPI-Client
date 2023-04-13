<template>
  <div class="selectdiv">
    <label class="selectLabel">Gráfico</label>
    <select v-model="selectedOption" @change="handleOptionChange">
      <option value="">Selecione uma opção</option>
      <option v-for="option in chartOptions" :value="option.value">
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
      chartType: "",
      chartTitle: "",
      url: "",
      chartOptions: [
        { label: "Maiores tarifas", value: "HigherTariffs" },
        { label: "Menores tarifas", value: "LowerTariffs" },
        { label: "Top cinco bancos", value: "TopFive" },
        { label: "Linha do tempo", value: "Trend" },
      ],
    };
  },
  methods: {
    handleOptionChange(event: any) {
      this.selectedOption = event.target.value;

      this.getTypeCharts(this.selectedOption);
   
    },
    getTypeCharts(value: string){
      switch (value) {
        case "LowerTariffs":
          this.chartType = "column";
          this.url = "bancosMenoresTarifas";
          this.chartTitle  =  "Bancos com menores tarifas"
          break;
        case "HigherTariffs":
          this.chartType = "column";
          this.url = "bancosMaioresTarifas";
          this.chartTitle  =  "Bancos com maiores tarifas"
          break;
        case "TopFive":
          this.chartType = "bar";
          break;
        case "Trend":
          this.chartType = "line";
          break;
        default:
          this.chartType = "";
          break;
      }

      this.$emit("chart-change", this.url, this.chartTitle, this.chartType);
    }
  },
  watch: {
    // whenever selectedOption changes, this function will run
    selectedOption(newValue, oldValue) {
      if (newValue !== this.selectedOption) {
       () => this.getTypeCharts(newValue);
      }
    }
  }
};
</script>


