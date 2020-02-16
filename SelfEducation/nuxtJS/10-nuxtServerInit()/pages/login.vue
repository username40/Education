<template>
  <form @submit.prevent="onSubmit" action="">
    <h1>Login</h1>
    <div class="form-group">
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <input type="password" class="form-control">
    </div>
    <p>
      <nuxt-link to="/">back to main page</nuxt-link>
    </p>
    <button type="submit" class="btn btn-primary">login</button>

  </form>
</template>

<script>
    export default {
        name: "login",
      layout: "empty",
      methods: {
          onSubmit() {
            this.$store.dispatch('login')
            this.$router.push('/')
          }
      }
    }
</script>

<style scoped>
  form {
    width: 600px;
  }
</style>
