<template>
  <div class="body">
    <h1>Painel de tarifas</h1>
    <p>Selecione as opções abaixo para visualizar as taxas de serviço</p>
    <FilterPanel @data-change="dataOnChange"/>
    <div>
      <DataTable :data="data"/>
    </div>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import FilterPanel from "@/components/FilterPanel.vue";

export default {
  components: {
    DataTable,
    FilterPanel,
  },
  data() {
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
