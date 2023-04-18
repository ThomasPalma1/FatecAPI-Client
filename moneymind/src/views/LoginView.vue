<template>
  <div class="body">
    <div class="space"></div>
    <h1 class="title">MoneyMind - Login</h1>
    <p class="title">
      O seu login é opcional, mas ativa sugestões especiais para você
    </p>

    <div><User label="Email" /></div>
    <div><User label="Senha" /></div>
    <div class="botao">
      <ButtonSubmit label="Acessar" />
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
  margin-top: 10%;
}
.botao {
  margin-left: 50%;
}
</style>

<script lang="ts">
import User from "@/components/User.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";

export default {
  components: {
    User,
    ButtonSubmit,
  },
};
</script>
