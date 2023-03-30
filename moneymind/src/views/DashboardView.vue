<template>
  <div class="container">
    <BasicLineCharts />
    <BasicBarCharts />
    <BasicColumnCharts />
    <BasicLineComparator />
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
import BasicLineCharts from "@/components/charts/BasicLineCharts.vue";
import BasicBarCharts from "@/components/charts/BasicBarCharts.vue";
import BasicColumnCharts from "@/components/charts/BasicColumnCharts.vue";
import BasicLineComparator from "@/components/charts/BasicLineComparator.vue";

export default {
  components: {
    BasicLineCharts,
    BasicBarCharts,
    BasicColumnCharts,
    BasicLineComparator
  },
};
</script>
