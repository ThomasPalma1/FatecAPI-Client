<template>
  <div class="grid-container">
    <div class="grid-item">
      <SelectRequest title="Instituição" url="tarifasValores" push="razaoSocialCnpj"
        @select-change="institutionOnChange" />
    </div>
    <div class="grid-item">
      <SelectRequest title="2ªInstituição" url="tarifasValores" push="razaoSocialCnpj"
        @select-change="institutionOnChange2" />
    </div>
    <div class="grid-item">
      <SelectRequest title="Pessoa" :data="typePeople" @select-change="peopleOnChange" />
    </div>
    <br/>
    <br/>
    <br/>
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
      selectedPeople: "",
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
        this.selectedPeople === "" ||
        this.selectedService === ""
      ) {
        this.$toast.warning("Verifique se todas opções estão selecionadas", {
          timeout: 3000,
          closeOnClick: true,
          pauseOnHover: false,
        });
      }

      await axios
        .get("http://localhost:8080/tarifasInstituicao/comparadorTarifas?cnpj1=10690848&cnpj2=60850229&servico=1309&tipoPessoa=F"
          //  "tarifasInstituicao/comparadorTarifas" +
          //  "?cnpj1=" +
          //  this.selectedCnpj +
          //  "&cnpj2=" +
          //  this.selectedCnpj2 +
          //  "&tipoPessoa=" +
          //  this.selectedPeople +
          //  "&servico=" +
          //  this.selectedService
        )
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
          debugger
          axios
        .get(
           "tarifasInstituicao/menorTarifa" +
           "&servico=" +
           this.selectedService +
           "&tipoPessoa=" +
           this.selectedPeople 
        ).then((response)=>{console.log(response)});
          this.$emit("data-change", this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    institutionOnChange(cnpj: string, razaoSocial: string) {
      this.selectedCnpj = cnpj;
    },
    institutionOnChange2(cnpj: string, razaoSocial: string) {
      this.selectedCnpj2 = cnpj;
    },
    peopleOnChange(data: string) {
      this.selectedPeople = data;
    },
    servicesOnChange(data: string) {
      this.selectedService = data;
    },
  },
};
</script>
<style>
.grid-item{
  width: 1%;
}
</style>