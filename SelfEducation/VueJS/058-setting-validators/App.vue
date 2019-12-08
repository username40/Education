<template>
  <div class="container">
<!--    At first we need to install vuelidate-->
<!--    go to: https://vuelidate.js.org/#sub-package-content and install it-->
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
<!--        Check the labels from blur better then from input ))-->
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          @blur="$v.email.$touch()"
        >
      </div>
<!-- here you can see all your fields from vuelidate-->
      <pre>{{ $v.email }}</pre>
    </form>
  </div>
</template>

<script>
  // for validate emails you must import it
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'app',
    data() {
      return {
        email: ''
      }
    },
    // for using vuelidate you must create a field validations
    validations: {
      email: {
        required,
        email
      }
    }
  }
</script>

<style scoped>

</style>
