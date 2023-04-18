<template>
  <div class="body">
    <h1>Painel de tarifas</h1>
    <p>
      Selecione as opções abaixo para visualizar as taxas de serviço
    </p>
    <div>
      <DataTable />
    </div>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";

export default {
  components: {
    DataTable,
  },
};
</script>
