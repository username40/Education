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
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          id="password"
          v-model="password"
          @blur.lazy="$v.password.$touch()"
        >
        <div
          class="invalid-feedback"
          v-if="!$v.password.minLength">
          Min lenght of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}</div>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          id="confirmPassword"
          v-model="confirmPassword"
          @blur="$v.confirmPassword.$touch()"
        >
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Passwords should match</div>
      </div>
    </form>
  </div>
</template>

<script>
  // for validate emails you must import it
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {
    name: 'app',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    // for using vuelidate you must create a field validations
    validations: {
      email: {
        required,
        email
      },
      password: {
        // here you can set minimum lenght for password
        minLength: minLength(6)
      },
      confirmPassword: {
        // with sameAs you can check the match your password
        sameAs: sameAs('password')
      }
    }
  }
</script>

<style scoped>

</style>
