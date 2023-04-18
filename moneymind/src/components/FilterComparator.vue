<template>
    <div class="grid-container">
        <div class="grid-item">
            <SelectRequest title="Bancos" url="bancos" @select-change="banksOnChange" />
        </div>
        <div class="grid-item">
            <SelectRequest title="Moedas" url="moedas" @select-change="currenciesOnChange" />
        </div>
        <div class="grid-item">
            <SelectRequest title="Serviços" url="servicos" @select-change="servicesOnChange" />
        </div>
        <div class="grid-item">
            <ButtonSubmit label="Comparar" :onClick="myFunction" />
        </div>
    </div>
</template>

<script lang="ts">
import SelectRequest from "@/components/SelectRequest.vue";
import ButtonSubmit from "./ButtonSubmit.vue";
import axios from "axios";

export default {
  name: "filter",
  components: {
    SelectRequest,
    ButtonSubmit,
  },
  data() {
    return {
      selectedBank: "",
      selectedCurrencie: "",
      selectedService: "",
      url: "",
      data: [],
    };
  },
  methods: {
    async myFunction() {
      if (
        this.selectedBank === "" ||
        this.selectedCurrencie === "" ||
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
            this.selectedBank +
            "?moeda=" +
            this.selectedCurrencie +
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

    banksOnChange(data: string) {
      this.selectedBank = data;
    },
    currenciesOnChange(data: string) {
      this.selectedCurrencie = data;
    },
    servicesOnChange(data: string) {
      this.selectedService = data;
    },
  },
};
</script>
