<template>
  <div class="home">
    <loading v-if="loading" />
    <div v-if="isAuthenticated">
      <a href="/outlet">
        <h4>Outlet Collection</h4>
      </a>
      <a href="/product">
        <h4>Product Collection</h4>
      </a>
    </div>
    <div v-if="!isAuthenticated && authStatus !== 'loading'">
      <h1>Welcome to Retail-mockapp !</h1>
      <p><a href="/login">Please Sign in </a></p>
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
}
</style>

<script>
import { mapGetters } from "vuex";
import Outlet from "components/outlet";
import Product from "components/product";

export default {
  components: {
    Outlet,
    Product
  },
  name: "home",
  computed: {
    ...mapGetters(["isAuthenticated", "authStatus"]),
    loading: function() {
      console.log('INI ISAUTHENTICATED ===>>>', this.isAuthenticated)
      console.log('INI authStatus ===>>>', this.authStatus)
      return this.authStatus === "loading" && !this.isAuthenticated;
    }
  },
  data() {
    return { };
  }
};
</script>
