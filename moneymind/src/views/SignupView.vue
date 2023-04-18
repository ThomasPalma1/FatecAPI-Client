<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" required />
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      axios
        .post("http://your-api-endpoint.com/users", newUser)
        .then((response) => {
          console.log(response.data);
          // Handle successful response from API
        })
        .catch((error) => {
          console.log(error.response.data);
          // Handle error response from API
        });
    },
  },
};
</script>
