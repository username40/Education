<template>
  <form action="">
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
    <button class="btn btn-primary">login</button>

  </form>
</template>

<script>
  // on default settings nuxt use default layout
  // you can change it
  // just write name of your layout
  //don't forget create it  before ))
    export default {
        name: "login",
      layout: "empty"
    }
</script>

<style scoped>
  form {
    width: 600px;
  }
</style>
