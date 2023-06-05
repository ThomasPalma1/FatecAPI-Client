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
      <InputField
        label="Confirmar senha"
        type="password"
        placeholder="Digite sua senha novamente"
        @onChange="getConfirmPassword"
      />
    </div>
    <div class="button-container">
      <ButtonSubmit label="Cadastrar" :onClick="handleSubmit" />
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
      confirmPass: "",
    };
  },
  methods: {
    getEmail(value: string) {
      this.email = value;
    },
    getPassword(value: string) {
      this.password = value;
    },
    getConfirmPassword(value: string) {
      this.confirmPass = value;
    },
    async handleSubmit() {
      if (this.password !== this.confirmPass) {
        this.$toast.warning("Senhas não correspondem", {
          timeout: 3000,
          closeOnClick: true,
          pauseOnHover: false,
        });
        return
      }
      try {
        await axios.post("cadastrar", {
          email: this.email,
          senha: this.password,
          confirmPass: this.confirmPass,
        });
      } catch (e) {
        this.$toast.error("Não foi possivel realizar o cadastro", {
          timeout: 3000,
          closeOnClick: true,
          pauseOnHover: false,
        });
      } finally {
        this.email = "";
        this.password = "";
        this.confirmPass = "";
      }
      console.log("Email:", this.email);
      console.log("Senha:", this.password);
      console.log("confirm:", this.confirmPass);
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
