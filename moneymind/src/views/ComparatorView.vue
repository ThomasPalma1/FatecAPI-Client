<template>
  <div class="body">
    <h1>Comparador de serviços</h1>
    <p>Selecione as opções abaixo para fazer a comparação entre duas instituições e seus respectivos serviços</p>
    <FilterComparator @data-change="dataOnChange"  @lower-tariff-change="lowerTariffOnChange"/>
    <div>
      <DataTableComparator :data="data" :lowerTariff="lowerTariff"/>
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
      lowerTariff: [],
    };
  },
  methods: {
    dataOnChange(data: []) {
      this.data = data;
    },
    lowerTariffOnChange(data: []) {
      this.lowerTariff = data;
    },
  },
};
</script>
