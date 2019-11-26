<template>
<!--  because I registered global my directive i just connect where i need it-->
<!--  you must use prefix v- -->
  <h1 v-colored>{{ msg }}</h1>
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
