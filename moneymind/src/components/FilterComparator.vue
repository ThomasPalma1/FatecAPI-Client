<template>
  <div class="grid-container-three">
    <div class="grid-item">
      <SelectRequest title="Instituição" url="tarifasValores" push="razaoSocialCnpj"
        @select-change="institutionOnChange" />
    </div>
    <div class="grid-item">
      <SelectRequest title="Instituição" url="tarifasValores" push="razaoSocialCnpj"
        @select-change="institutionOnChange2" />
    </div>
    <div class="grid-item">
      <SelectRequest title="Serviços" url="servicos" push="servico" @select-change="servicesOnChange" />
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
      selectedCnpj: "",
      selectedCnpj2: "",
      menorTarifa: "",
      data: [],
      typePeople: [
        ["F", "Pessoa Física"],
        ["J", "Pessoa Jurídica"],
      ],
      selectedService: "",
      url: "",
    };
  },
  methods: {
    async myFunction() {
      if (
        this.selectedCnpj === "" ||
        this.selectedCnpj2 === "" ||
        this.selectedService === ""
      ) {
        this.$toast.warning("Verifique se todas opções estão selecionadas", {
          timeout: 3000,
          closeOnClick: true,
          pauseOnHover: false,
        });
      }

      await axios
        .get("tarifasInstituicao/comparadorTarifas" +
           "?cnpj1=" +
           this.selectedCnpj +
           "&cnpj2=" +
           this.selectedCnpj2 +
           "&tipoPessoa=F&servico=" +
           this.selectedService
        )
        .then((response) => {
          this.data = response.data;

          this.$emit("data-change", this.data);
        })
        .catch((err) => {
          console.log(err);
        });

        await axios
        .get(
           "tarifasInstituicao/menorTarifa?" +
           "servico=" +
           this.selectedService +
           "&tipoPessoa=F"
        ).then((response) => {
          this.menorTarifa = response.data;
          this.$emit("lower-tariff-change", this.data);
        })
        .catch((err) => {
          console.log(err);
        });
      },

    institutionOnChange(cnpj: string) {
      this.selectedCnpj = cnpj;
    },
    institutionOnChange2(cnpj: string) {
      this.selectedCnpj2 = cnpj;
    },
    servicesOnChange(data: string) {
      this.selectedService = data;
    },
  },
};
</script>
