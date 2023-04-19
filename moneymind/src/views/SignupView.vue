<template>
  <div class="body">
    <div class="space2">
      <p>
        <ButtonCadastroLogin label1="Login" class="botaoc" />
        <ButtonCadastroLogin label1="Cadastro" class="botaol" />
      </p>
    </div>
    <div class="space">
      <h1 class="title">MoneyMind - Cadastro</h1>
      <p class="title">
        O seu cadastro é opcional, mas ativa sugestões especiais para você
      </p>

      <div><User label="Email" /></div>
      <div><User label="Senha" /></div>
      <div><User label="Confirmar a senha" /></div>
      <div class="botao">
        <ButtonSubmit label="Cadastrar" />
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
  margin-top: 5%;
}
.space2 {
  margin-top: 2%;
}
.botao {
  margin-left: 50%;
}
.botaoc {
  background-color: aliceblue;
}
.botaol {
  margin-left: 12%;
}
</style>

<script lang="ts">
import User from "@/components/User.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import ButtonCadastroLogin from "@/components/ButtonCadastroLogin.vue";

export default {
  components: {
    User,
    ButtonSubmit,
    ButtonCadastroLogin,
  },
};
</script>
