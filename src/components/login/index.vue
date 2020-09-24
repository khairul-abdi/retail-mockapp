<template>
  <div class="container">
    <div class="vue-template col-6 mx-auto">
      <form @submit.prevent="login">
        <h1>Sign in</h1>
        <div class="form-group">
          <label>Email</label>
          <input type="email" required v-model="username" class="form-control form-control-lg" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control form-control-lg" />
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .vue-template {
    align-items: center;
    margin-top: 90px;
  }
</style>

<script>
import { AUTH_REQUEST } from "actions/auth";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      const { username, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push("/");
      })
    }
  }
};
</script>
