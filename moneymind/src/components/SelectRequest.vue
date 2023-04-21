<template>
  <div class="selectdiv">
    <label class="selectLabel"> {{ title }} </label>
    <select v-model="selectedOption" @change="handleOptionChange">
      <option value="">Selecione uma opção</option>
      <option v-for="option in options" :value="option[0]">
        {{ truncatedText(option) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import axios from "axios";

import Vue from "vue";
Vue.filter("truncate", function (text: string, length: number) {
  if (text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
});

export default {
  name: "dropdown",
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    data: {
      type: Object,
    },
    push: {
      type: String,
    },
  },
  data() {
    return {
      options: [],
      grupos: [],
      selectedOption: "",
    };
  },
  methods: {
    handleOptionChange(event: any) {
      this.selectedOption = event.target.value;
      const option = this.options.find((option) => option[0] === event.target.value);
      
      const value = option![0];
      const text = option![1];

      this.$emit("select-change", value, text);
    },
    truncatedText(option: string[]) {
      return option[0] === this.selectedOption
        ? Vue.filter("truncate")(option[1], 30)
        : option[1];
    },
    async getDataAxios() {
      await axios
        .get("/" + this.url)
        .then((response) => {
          var series_data = [],
            grupos = response.data;
          this.options = grupos;

          if (this.push === "codigoNome") {
            for (var i = 0; i < grupos.length; i++) {
              series_data.push([grupos[i].codigo, grupos[i].nome]);
            }
          } else if (this.push === "razaoSocialCnpj") {
            for (var i = 0; i < grupos.length && i < 100; i++) {
              series_data.push([grupos[i].cnpj, grupos[i].razao_social]);
            }
          } else if (this.push === "grupo" || this.push === "servico") {
            for (var i = 0; i < grupos.length && i < 100; i++) {
              series_data.push([grupos[i].codigo, grupos[i].nome]);
            }
          }

          this.options = series_data as any;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataProps() {
      this.options = this.data as [];
    },
    getTypeData() {
      if (this.url) {
        this.getDataAxios();
      } else {
        this.getDataProps();
      }
    },
  },
  mounted: function () {
    this.getTypeData();
  },
};
</script>
