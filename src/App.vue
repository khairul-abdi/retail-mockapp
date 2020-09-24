<template>
  <div id="app" class="container">
    <navigation />
    <div class="d-flex justify-content-center body">
      <!-- <center-container> -->
        <router-view />
      <!-- </center-container> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "components/navigation";
import { USER_REQUEST } from "actions/user";
import Footer from "./components/footer/index";

export default {
  components: {
    Footer,
    Navigation
  },
  name: "app",
  created: function() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  }
};
</script>

<style lang="scss" scoped>
  .body {
    margin-top: 65px;
  }
</style>
