<template>
  <div class="body">
    <h1>Comparador de serviços</h1>
    <p>Selecione as opções abaixo para visualizar e comparar os serviços</p>
    <FilterComparator @data-change="dataOnChange"/>
    <div>
      <DataTableComparator :data="data" />
    </div>
  </div>
</template>

<script lang="ts">
import FilterComparator from "@/components/FilterComparator.vue";
import DataTableComparator from "@/components/DataTableComparator.vue";

export default {
  name: "comparator",
  components: {
    FilterComparator,
    DataTableComparator
}, data(){
    return {
      data: [],
    };
  },
  methods: {
    dataOnChange(data: []) {
      this.data = data;
    },
  },
};
</script>
