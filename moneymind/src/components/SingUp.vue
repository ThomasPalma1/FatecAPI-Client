<template>
    <div>
      <div>
        <InputField label="E-mail" type="email" placeholder="Digite seu e-mail" />
        <InputField
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
        <InputField
          label="Confirmar senha"
          type="password"
          placeholder="Digite sua senha novamente"
        />
      </div>
      <div class="button-container ">
        <ButtonSubmit label="Cadastrar"/>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import ButtonSubmit from "./ButtonSubmit.vue";
  import InputField from "./InputField.vue";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        confirmPass: "",
      };
    },
    methods: {
      handleSubmit() {
        // Lógica para autenticar o email e a senha
        console.log("Email:", this.email);
        console.log("Senha:", this.password);
        // Limpa os campos de entrada após o envio
        this.email = "";
        this.password = "";
        this.confirmPass = "";
      },
    },
    components: { ButtonSubmit, InputField },
  };
  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  </style>
  