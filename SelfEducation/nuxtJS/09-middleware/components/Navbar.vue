<template>
  <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link class="navbar-brand" to="/">NuxtJS</nuxt-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
<!--          exact make active class only when you on this page-->
<!--          active class add class what you need when you stay on this page-->
          <nuxt-link exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/login">login</nuxt-link>
        </li>
        <li class="nav-item" v-if="isAuth">
          <a class="nav-link" href="#" @click.prevent="logout">logout</a>
        </li>
      </ul>
    </div>
  </nav>
  </header>
</template>

<script>
    export default {
        name: "Navbar",
      methods: {
          logout() {
           this.$store.dispatch('logout')
          }
      },
      computed: {
          isAuth() {
            return this.$store.getters.isAuth
          }
      }
    }
</script>

<style scoped>

</style>
