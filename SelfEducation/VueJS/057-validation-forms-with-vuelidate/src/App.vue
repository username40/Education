<template>
  <div class="container">
<!--    At first we need to install vuelidate-->
<!--    go to: https://vuelidate.js.org/#sub-package-content and install it-->
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        email: ''
      }
    }
  }
</script>

<style scoped>

</style>
