<template>
  <div>
    <h1>Car id = {{ id }}</h1>
    <button class="btn btn-sm btn-info" @click="goBackToCars">Back</button>
    <br>
<!--    for creating sub routes (to get information from the another component) you need use-->
<!--    router-link and router view to show it-->
    <router-link
      class="btn btn-info"
      tag="button"
      :to="{name: 'carFull', params: {id: id}}"
    >Full info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Car",
    data() {
      return {
        // id: this.$router.currentRoute.params['id'] this is the same strings...
        // it takes id from router and put it in the id field inside data
        id: this.$route.params['id']
      }
    },
    methods: {
      // write method
      // and write there special field $router.push
      // it's looks like a push in the array of browser history new page
      // and then you will be return on a new page)
      goBackToCars() {
        this.$router.push('/cars')
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
