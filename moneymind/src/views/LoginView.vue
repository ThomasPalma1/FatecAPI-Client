<template>
  <div class="body">
    <div class="space2">
      <p>
        <ButtonCadastroLogin label1="Login" />
        <ButtonCadastro label1="Cadastro" class="botaoc" />
      </p>
    </div>
    <div class="space">
      <h1 class="title">MoneyMind - Login</h1>
      <p class="title">O seu login é opcional, mas ativa sugestões especiais para você</p>
      <div><User label="Email" /></div>
      <div><User label="Senha" /></div>
      <div class="botao">
        <ButtonSubmit label="Acessar" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  padding: 1.25rem;
}
.title {
  text-align: center;
}
.space {
  margin-top: 3%;
}

.botao {
  display: flex;
  justify-content: center;
}
.botaoc {
  background-color: aliceblue;
  margin-left: 14%;
}
</style>

<script lang="ts">
import User from "@/components/User.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import ButtonCadastro from "@/components/ButtonCadastro.vue"
import ButtonCadastroLogin from "@/components/ButtonCadastroLogin.vue";

export default {
  components: {
    User,
    ButtonSubmit,
    ButtonCadastro,
    ButtonCadastroLogin,
  },
};
</script>
