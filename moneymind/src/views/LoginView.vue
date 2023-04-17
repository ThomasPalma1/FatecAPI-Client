<template>
  <div class="body">
    <h1 class="title">MoneyMind - Login</h1>
    <p class="title">
      O seu login é opcional, mas ativa sugestões especiais para você
    </p>
    <div>
      <FilterSearch @data-change="dataOnChange" />
    </div>
    <div class="container" v-if="!isEmpty(data)">
      <ChartVue
        :chart-type="chartType"
        :chart-title="chartTitle"
        :data="data"
      />
    </div>
  </div>
</template>

<style scoped>
.body {
  padding: 1.25rem;
}
.title {
  text-align: center;
}
</style>

<script lang="ts">
import FilterSearch from "@/components/FilterSearch.vue";
import ChartVue from "@/components/charts/Chart.vue";

export default {
  components: {
    FilterSearch,
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
      chartTitle: "",
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
