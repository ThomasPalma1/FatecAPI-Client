<template>
  <div class="grid-container-two">
    <div class="grid-item">
      <SelectRequest
        title="Instituição"
        url="tarifasValores"
        push="razaoSocialCnpj"
        @select-change="institutionOnChange"
      />
    </div>
    <div class="grid-item">
      <SelectRequest
        title="Pessoa"
        :data="typePeople"
        @select-change="peopleOnChange"
      />
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
      selectedCnpj: "",
      data: [],
      typePeople: [
        ["F", "Pessoa Física"],
        ["J", "Pessoa Jurídica"],
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
        .get(
          "/tarifasInstituicao/buscarTarifasInstituicao" +
            "?cnpj=" +
            this.selectedCnpj +
            "&tipoPessoa=" +
            this.selectedPeople
        )
        .then((response) => {

          this.data = response.data;

          this.$emit("data-change", this.data);
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

    institutionOnChange(razaoSocial: string, cnpj: string) {
      this.selectedInstitution = razaoSocial;
      this.selectedCnpj = cnpj;
    },
    peopleOnChange(data: string) {
      this.selectedPeople = data;
      console.log(this.selectedPeople);
    },
  },
};
</script>
