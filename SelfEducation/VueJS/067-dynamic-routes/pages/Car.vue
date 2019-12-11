<template>
  <h1>Car id = {{ id }}</h1>
</template>

<script>
  export default {
    name: "Car",
    data() {
      return {
        // id: this.$router.currentRoute.params['id'] this is the same strings...
        // it takes id from router and put it in the id field inside data
        id: this.$route.params[id]
      }
    },
    watch: {
      // but if you need to watch for it you must use $route
      $route(toR, fromR) {
        this.id = toR.params['id']
      }
    }
  }
</script>

<style scoped>

</style>
