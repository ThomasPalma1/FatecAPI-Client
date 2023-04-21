<template>
  <div class="grid-container">
    <div class="grid-item">
      <SelectChart @chart-change="chartsOnChange" />
    </div>
    <div class="grid-item">
      <SelectRequest title="Grupos" url="grupos" push="grupo" @select-change="groupsOnChange" />
    </div>
    <div class="grid-item">
      <SelectRequest title="Serviços" url="servicos" push="servico" @select-change="servicesOnChange"/>
    </div>
    <div class="grid-item">
      <ButtonSubmit label="Aplicar" :onClick="myFunction" />
    </div>
  </div>
</template>

<script lang="ts">
import SelectRequest from "@/components/SelectRequest.vue";
import ButtonSubmit from "./ButtonSubmit.vue";
import SelectChart from "./charts/SelectChart.vue";
import axios from "axios";

export default {
  name: "filter",
  components: {
    SelectRequest,
    ButtonSubmit,
    SelectChart,
  },
  data() {
    return {
      selectedGroup: "",
      selectedService: "",
      url: "",
      chartTitle: "",
      chartType: "",
      data: [],
    };
  },
  methods: {
    async myFunction() {
      if (
        this.selectedGroup === "" ||
        this.selectedService === "" ||
        this.url === ""
      ) {
        this.$toast.warning("Verifique se todas opções estão selecionadas", {
          timeout: 3000,
          closeOnClick: true,
          pauseOnHover: false,
        });
      }

      await axios
        .get(
          "/tarifasValores/" +
            this.url +
            "?grupo=" +
            this.selectedGroup +
            "&servico=" +
            this.selectedService
        )
        .then((response) => {
          var series_data = [],
            thedata = response.data;

          for (var i = 0; i < thedata.length; i++) {
            series_data.push([
              thedata[i].razao_social,
              parseFloat(thedata[i].valor_maximo),
            ]);
          }
          this.data = series_data as any;

          const data = series_data as any;
          this.$emit("data-change", data, this.chartType, this.chartTitle);
        })
        .catch((err) => {
          this.$toast.error("Não foi possivel gerar o gráfico", {
            timeout: 3000,
            closeOnClick: true,
            pauseOnHover: false,
          });

          console.log(err);
        });
    },

    groupsOnChange(data: string) {
      this.selectedGroup = data;
    },
    servicesOnChange(data: string) {
      this.selectedService = data;
    },
    chartsOnChange(url: string, title: string, type: string) {
      this.url = url;
      this.chartTitle = title;
      this.chartType = type;
    },
  },
};
</script>

