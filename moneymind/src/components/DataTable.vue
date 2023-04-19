<template>
  <div>
    <div class="search-container">
      <RowsPerPageSelectorVue
        :selected-option="pageSize"
        @option-changed="onRowsPerPageChanged"
      />
      <input v-model="searchQuery" id="myInput" placeholder="Buscar" />
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th @click="sortBy('name')">
            Name 
            <IconFilter />
          </th>
          <th @click="sortBy('email')">
            Email
            <IconFilter />
          </th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in pagedData" :key="row.email">
          <td>{{ row.name }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.age }}</td>
        </tr>
      </tbody>
    </table>
    <div class="search-container">
      <label for=""
        >Mostrando 1 a {{ pageSize }} de {{ data.length }} entradas</label
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
import IconFilter from './icons/IconFilter.vue';

interface Row {
  [key: string]: string | number;
}

export default {
  props: {
    data: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      searchQuery: "",
      currentPage: 1,
      pageSize: 10,
      sortKey: "" as keyof Row,
      sortOrders: {
        name: 1,
        email: 1,
      } as {
        [key in keyof Row]: number;
      },
      data: this.data as Row[],
    };
  },
  computed: {
    filteredData(): Row[] {
      let data = this.data;
      let searchQuery = this.searchQuery.toLowerCase();
      if (searchQuery) {
        data = data.filter((row: Row) => {
          return Object.keys(row).some((key) => {
            return String(row[key]).toLowerCase().indexOf(searchQuery) > -1;
          });
        });
      }
      return data;
    },
    sortedData(): Row[] {
      let data = this.filteredData;
      data = data.slice().sort((a: Row, b: Row) => {
        const propA = a[this.sortKey];
        const propB = b[this.sortKey];
        if (propA !== undefined && propB !== undefined) {
          if (typeof propA === "number" && typeof propB === "number") {
            return (propA - propB) * this.sortOrders[this.sortKey];
          } else {
            return (
              (propA as string).localeCompare(propB as string) *
              this.sortOrders[this.sortKey]
            );
          }
        } else {
          return 0;
        }
      });
      return data;
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
    sortBy(key: keyof Row) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    onRowsPerPageChanged(rowsPerPage: number) {
      this.pageSize = rowsPerPage;
    },
  },
  components: {
    RowsPerPageSelectorVue,
    IconFilter,
  },
};

interface Row {
  name: string;
  email: string;
  age: number;
}
</script>

<style>
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  border-spacing: 0;
  text-align: center;
  color: var(--color-text);
}

.table thead th {
  border-top: none;
  background-color: #f0f0f0;
  font-weight: bold;
  border: 1px solid #e7e7e7;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 1.2rem;
  vertical-align: bottom;
}
.table thead th:first-child {
  border-radius: 4px 0 0 0;
}
.table thead th:last-child {
  border-radius: 0 4px 0 0;
}
.table tbody tr {
  border: 1px solid #e7e7e7;
}

.table tbody td {
  padding: 1rem;
  font-weight: 400;
  border: 1px solid #e7e7e7;
}
.table tbody tr:hover {
  background-color: var(--vt-c-text-dark-2);
  cursor: pointer;
}
.table tbody tr:nth-child(even) {
  background-color: #f0f0f0;
}

.table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

.table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

.search-container {
  justify-content: space-between;
  display: flex;
  align-items: center;
}

#myInput {
  background-image: url("../assets/search.svg");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  width: auto;
  margin-left: 0.5rem;
  display: inline-block;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 0px 8px 8px 0px;
  outline: none;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #363131;
  border-radius: 5px;
  background: #363131;
  color: #f0f0f0;
  cursor: pointer;
}

.pagination span {
  margin: 0 5px;
  font-size: 16px;
  font-weight: bold;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

