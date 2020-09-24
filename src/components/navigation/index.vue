<template>
  <div>
    <nav class="navbar navigation shadow rounded justify-content-between flex-nowrap flex-row fixed-top font-weight-bold">
      <div class="container">
        <ul class="nav navbar-nav flex-row float-left">
          <li>
            <router-link to="/" class="mr-3 nav-link pr-3">Home</router-link>
          </li>
          <li>
            <router-link to="/outlet" v-if="isAuthenticated" class="mr-3 nav-link pr-3">Outlet Collection</router-link>
          </li>
          <li>
            <router-link to="/product" v-if="isAuthenticated" class="mr-3 nav-link pr-3">Product Collection</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item" v-if="isProfileLoaded">
            <router-link class="nav-link pr-3" to="/account">{{ name }}</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated" @click="logout">
            <router-link class="nav-link pr-3" to="">Logout</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated && !authLoading">
            <router-link class="nav-link pr-3" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

.navigation {
  display: flex;
  align-items: center;
  background-color: #ffa035;
  padding: 10px;
}

.brand {
  display: flex;
  align-items: center;
}
.logout {
  &:hover {
    cursor: pointer;
  }
}
</style>

<script>
import { mapGetters, mapState } from "vuex";
import { AUTH_LOGOUT } from "actions/auth";

export default {
  name: "navigation",
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    }
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      name: state => `${state.user.profile.title} ${state.user.profile.name}`
    })
  }
};
</script>
