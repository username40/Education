<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
<!--bind :class for dynamic display errors-->
        <input
          type="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          id="email"
          v-model="email"
          @blur="$v.email.$touch()"
        >
<!--        here you check special fields in vuelidate-->
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
      </div>
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
