<template>
  <div class="body">
    <h1>Visão Geral</h1>
    <p>Selecione as opções abaixo para gerar o gráfico de acordo com as informações que deseja visualizar</p>
    <div>
      <FilterDashboard @data-change="dataOnChange" />
    </div>
    <div class="container" v-if="!isEmpty(data)">
      <ChartVue :chart-type="chartType" :chart-title="chartTitle" :data="data" />
    </div>
  </div>
</template>


<script lang="ts">
import FilterDashboard from "@/components/FilterDashboard.vue";
import ChartVue from "@/components/charts/Chart.vue"

export default {
  components: {
    FilterDashboard,
    ChartVue,
  },
  computed: {
    isEmpty() {
      return (arr: never[]) => arr.length === 0;
    },
  },
  data() {
    return {
      data: [],
      chartType: "",
      chartTitle: ""
    };
  },
  methods: {
    dataOnChange(data: [], type: string, title: string) {
      this.data = data;
      this.chartType = type;
      this.chartTitle = title;
    },
  },
};
</script>
