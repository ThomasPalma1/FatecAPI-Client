<template>
  <div class="grid-container">
    <div class="grid-item">
      <SelectGroups @groups-change="groupsOnChange" />
    </div>
    <div class="grid-item">
      <SelectServices @services-change="servicesOnChange" />
    </div>
    <div class="grid-item">
      <ButtonSubmit label="Aplicar" :onClick="myFunction" />
    </div>
  </div>
</template>

<script lang="ts">
import SelectGroups from "@/components/Selectgroups.vue";
import SelectServices from "@/components/SelectServices.vue";
import ButtonSubmit from "./ButtonSubmit.vue";
import axios from "axios";

export default {
  name: "filter",
  components: {
    SelectGroups,
    SelectServices,
    ButtonSubmit,
  },
  data() {
    return {
      selectedGroup: "",
      selectedService: "",
      data: [],
    };
  },
  methods: {
    myFunction() {
      axios
        .get(
          "/tarifasValores/bancosMaioresTarifas?grupo=" +
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
          this.$emit("data-change", data);
        })
        .catch((err) => console.log(err));

      axios
        .get(
          "/tarifasValores/bancosMenoresTarifas?grupo=" +
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
          const menores = series_data as any;
          this.$emit("menores-change", menores);
    
        })
        .catch((err) => console.log(err));
    },

    groupsOnChange(data: string) {
      this.selectedGroup = data;
    },
    servicesOnChange(data: string) {
      this.selectedService = data;
    },
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Cria 4 colunas com largura igual */
  grid-gap: 10px; /* Define o espaçamento entre as colunas */
}

.grid-item {
  padding: 20px;
  text-align: center;
}
</style>
