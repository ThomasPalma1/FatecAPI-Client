<template>
  <div class="body">
    <h1>Comparador de serviços</h1>
    <p>Selecione as opções abaixo para visualizar e comparar os serviços</p>
    <FilterComparator />
    <div class="container" v-if="!isEmpty(data)">
      <ChartComparator :chart-type="chartType" :chart-title="chartTitle" :data="data" />
    </div>
  </div>
</template>

<script lang="ts">
import FilterComparator from "@/components/FilterComparator.vue";
import ChartComparator from "@/components/charts/ChartComparator.vue";

export default {
  name: "comparator",
  components: {
    FilterComparator,
    ChartComparator
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
