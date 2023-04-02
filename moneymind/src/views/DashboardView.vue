<template>
  <div>
    <div>
      <FilterSearch @data-change="dataOnChange" @menores-change="menoresOnChange" />
    </div>
    <div class="container" v-if="!isEmpty(menores)">
      <!-- <TrendChart />
      <TopFiveChart /> -->
      <HigherTariffsChart :data="data" />
      <LowerTariffsChart :data="menores"/>
    </div>
    <div v-else class="alert">
      <p>
        Selecione um <strong>GRUPO</strong> um <strong>SERVIÇO</strong> para
        gerar sua dashboard
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Cria 4 colunas com largura igual */
  grid-gap: 10px; /* Define o espaçamento entre as colunas */
}
.alert {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: none;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  background-color: rgb(22, 11, 11);
  display: flex;
  padding: 6px 16px;
  color: rgb(244, 199, 199);
}
</style>

<script lang="ts">
import FilterSearch from "@/components/FilterSearch.vue";
import TrendChart from "@/components/charts/TrendChart.vue";
import TopFiveChart from "@/components/charts/TopFiveChart.vue";
import HigherTariffsChart from "@/components/charts/HigherTariffsChart.vue";
import LowerTariffsChart from "@/components/charts/LowerTariffsChart.vue";

export default {
  components: {
    TrendChart,
    TopFiveChart,
    HigherTariffsChart,
    LowerTariffsChart,
    FilterSearch,
  },
  computed: {
    isEmpty() {
      return (arr: any) => arr.length === 0;
    },
  },
  data() {
    return {
      data: [],
      menores: [],
    };
  },
  methods: {
    dataOnChange(data: any) {
      this.data = data;
    },
    menoresOnChange(data: any) {
      this.menores = data;
    },
  },
};
</script>
