<template>
  <div>
  <h1>{{ msg }}</h1>
<!--    after creating filter, call it use | -->
  <h1>{{ msg | lowerCase}}</h1>
<!--    also you can create global filter in main.js-->
  <h1>{{ msg | upperCase}}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    // for creating filters use a special field
    // this looks like a creating local directives
    filters: {
      lowerCase(value) {
          return value.toLowerCase()
      }
    }
}
</script>

<style>
</style>
