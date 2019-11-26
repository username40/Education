<template>
  <div>
    <!-- arguments in directives write after name of your directives and : -->
  <h1 v-colored:background="'green'">{{ msg }}</h1>
  <h1 v-colored:color="'green'">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
