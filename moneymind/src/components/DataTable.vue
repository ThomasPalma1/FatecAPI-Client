<template>
  <div>
    <form @submit.prevent="onSearch">
      <div class="search-container">
        <RowsPerPageSelectorVue
          :selected-option="pageSize"
          @option-changed="onRowsPerPageChanged"
        />
        <input v-model="searchQuery" id="myInput" placeholder="Buscar" />
      </div>
    </form>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th @click="sortBy('servico')">
            Serviço
            <IconFilter />
          </th>
          <th @click="sortBy('pessoa')">Pessoa</th>
          <th @click="sortBy('moeda')">Moeda</th>
          <th @click="sortBy('unidade')">Unidade</th>
          <th @click="sortBy('dataVigencia')">Data de Vigência</th>
          <th @click="sortBy('Periodicidade')">Periodicidade</th>
          <th @click="sortBy('valorMaximo')">Valor Maximo</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="filteredData.length > 0">
          <tr v-for="row in filteredData" :key="row.id">
            <td>{{ row.nomeServico }}</td>
            <td>{{ row.tipoPessoa }}</td>
            <td>{{ row.tipoValor }}</td>
            <td>{{ row.unidade }}</td>
            <td>{{ row.dataVigencia }}</td>
            <td>{{ row.periodicidade }}</td>
            <td>{{ row.valorMaximo }}</td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="7">Nenhum resultado encontrado</td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="search-container">
      <label
        >Mostrando {{ (currentPage - 1) * pageSize + 1 }} a
        {{ Math.min(currentPage * pageSize, data.length) }}
        de {{data.length }} entradas</label
      >
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="currentPage--">
          Anterior
        </button>
        <span>{{ currentPage }} de {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++">
          Próxima
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RowsPerPageSelectorVue from "./RowsPerPageSelector.vue";
import IconFilter from "./icons/IconFilter.vue";

interface Row {
  [key: string]: string | number;

  id: number;
  servico: string;
  nomeServico: string;
  tipoPessoa: string;
  cnpj: number;
  unidade: string;
  dataVigencia: string;
  valorMaximo: number;
  tipoValor: string;
  periodicidade: string;
}

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterKey: "",
      sortKey: "",
      sortOrders: {} as { [key: string]: number },
      searchQuery: "",
      currentPage: 1,
      pageSize: 10,
      data: this.data as Row[],
    };
  },
  computed: {
    sortedData(): Row[] {
      let data = this.data as Row[];
      const sortKey = this.sortKey;
      const order = this.sortOrders[sortKey] || 1;
      if (sortKey) {
        data = data.slice().sort((a: any, b: any) => {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
    filteredData(): Row[] {
      const filterKey = this.filterKey.toLowerCase();
      const searchQuery = this.searchQuery.toLowerCase();
      const data = this.pagedData;

      if (!filterKey && !searchQuery) {
        return data;
      }

      return data.filter((row: Row) => {
        return Object.keys(row).some((key) => {
          const cellValue = String(row[key]).toLowerCase();
          return (
            (!filterKey || cellValue.indexOf(filterKey) > -1) &&
            (!searchQuery || cellValue.indexOf(searchQuery) > -1)
          );
        });
      });
    },

    pagedData(): Row[] {
      let start = (this.currentPage - 1) * this.pageSize;
      return this.sortedData.slice(start, start + this.pageSize);
    },
    totalPages(): number {
      return Math.ceil(this.sortedData.length / this.pageSize);
    },
  },
  methods: {
    sortBy(key: string) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    onRowsPerPageChanged(rowsPerPage: number) {
      this.pageSize = rowsPerPage;
    },
    onSearch(event: Event) {
      event.preventDefault();
      console.log(event);
      this.currentPage = 1;
    },
  },
  watch: {
    searchQuery(newSearchQuery: string, oldSearchQuery: string) {
      if (newSearchQuery !== oldSearchQuery) {
        this.currentPage = 1;
      }
    },
  },
  components: {
    RowsPerPageSelectorVue,
    IconFilter,
  },
};
</script>


