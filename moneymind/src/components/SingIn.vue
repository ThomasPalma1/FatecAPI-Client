<template>
  <div>
    <div>
      <InputField
        label="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
        @onChange="getEmail"
      />
      <InputField
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        @onChange="getPassword"
      />
    </div>
    <div class="button-container">
      <ButtonSubmit label="Entrar" :onClick="handleSubmit" />
      <p class="public-access">-OU-</p>
      <router-link class="enter-link" to="/dashboard"
        >acessar utilizando perfil público</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
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
    getEmail(value: string) {
      this.email = value;
    },
    getPassword(value: string) {
      this.password = value;
    },
    async handleSubmit() {
      try {
        await axios.post("login", {
          email: this.email,
          senha: this.password,
        });
      } catch (e) {
        this.$toast.error("Não foi possivel realizar o login", {
          timeout: 3000,
          closeOnClick: true,
          pauseOnHover: false,
        });
      } finally {
        this.email = "";
        this.password = "";
      }
      console.log("Email:", this.email);
      console.log("Senha:", this.password);
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
  color: rgb(151, 112, 28);
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
