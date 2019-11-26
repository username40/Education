<template>
<!-- now we make it flexible-->
  <h1 v-colored="'green'">{{ msg }}</h1>
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
