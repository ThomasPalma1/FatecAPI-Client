<template>
  <div class="body">
    <h1>Comparador de serviços</h1>
    <p>Selecione as opções abaixo para visualizar e comparar os serviços</p>
    <FilterComparator />
  </div>
</template>

<script lang="ts">
import FilterComparator from "@/components/FilterComparator.vue";

export default {
  name: "comparator",
  components: {
    FilterComparator,
  },
};
</script>
