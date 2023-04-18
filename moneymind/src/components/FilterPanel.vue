<template>
  <div class="grid-container-two">
    <div class="grid-item">
      <SelectRequest
        title="Instituição"
        url=""
        @select-change="institutionOnChange"
      />
    </div>
    <div class="grid-item">
      <SelectRequest title="Pessoa" :data="typePeople" @select-change="peopleOnChange" />
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
      selectedInstitution: "",
      selectedPeople: "",
      url: "",
      data: [],
      typePeople: [
        ["Pessoa Fisica", "Pessoa Física"],  
        ["Pessoa Juridica", "Pessoa Jurídica"],
      ],
    };
  },
  methods: {
    async myFunction() {
      if (this.selectedInstitution === "" || this.selectedPeople === "") {
        this.$toast.warning("Verifique se todas opções estão selecionadas", {
          timeout: 3000,
          closeOnClick: true,
          pauseOnHover: false,
        });
      }

      await axios
        .get("")
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
        .catch((err) => {
          this.$toast.error("Não foi possivel gerar o painel", {
            timeout: 3000,
            closeOnClick: true,
            pauseOnHover: false,
          });

          console.log(err);
        });
    },

    institutionOnChange(data: string) {
      this.selectedInstitution = data;
    },
    peopleOnChange(data: string) {
      this.selectedPeople = data;
    },
  },
};
</script>
