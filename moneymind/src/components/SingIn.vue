<template>
  <div>
    <div>
      <InputField label="E-mail" type="email" placeholder="Digite seu e-mail" />
      <InputField
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
      />
    </div>
    <div class="button-container ">
      <ButtonSubmit label="Entrar"/>
      <p class="public-access">-OU-</p>
      <router-link class="enter-link" to="/dashboard">acessar utilizando perfil público</router-link>
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
  flex-direction: column;
}

.enter-link {
  font-size: 16px;
  color:   rgb(151, 112, 28);
  text-decoration: none;
  cursor: pointer;
  text-decoration: underline;
}

.enter-link:hover {
  text-decoration: underline;
}

.public-access {
    margin-top: 8px;
}

</style>
