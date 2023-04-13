<template>
  <div class="selectdiv">
    <label class="selectLabel">Serviços</label>
    <select v-model="selectedOption" @change="handleOptionChange">
      <option value="">Selecione uma opção</option>
      <option v-for="option in options" :value="option[0]">
        {{ option[1] }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  name: "dropdown",
  data() {
    return {
      options: [],
      selectedOption: "",
    };
  },
  methods: {
    handleOptionChange(event: any) {
      this.selectedOption = event.target.value
      const data = event.target.value;
      this.$emit('services-change', data);
    }
  },
  mounted: async function () {
   await axios
      .get("/servicos")
      .then((response) => {
        var series_data = [],
          grupos = response.data;
        for (var i = 0; i < grupos.length; i++) {
          series_data.push([grupos[i].codigo, grupos[i].nome]);
        }
        this.options = series_data as any;
      })
      .catch((err) => {
        console.log(err)
      });
  },
};
</script>


