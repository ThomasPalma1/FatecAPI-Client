<template>
  <div class="container">
    <TrendChart />
    <TopFiveChart/>
    <HigherTariffsChart />
    <LowerTariffsChart />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
  flex-wrap: wrap;
}
</style>

<script lang="ts">
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
},
};
</script>
