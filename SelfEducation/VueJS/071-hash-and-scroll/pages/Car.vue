<template>
  <div>
    <h1>Car id = {{ id }}</h1>
    <button class="btn btn-sm btn-info" @click="goBackToCars">Back</button>
    <br>
    <router-link
      class="btn btn-info"
      tag="button"
      :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000}, hash: '#scroll'}"
    >Full info
    </router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Car",
    data() {
      return {
        id: this.$route.params['id']
      }
    },
    methods: {
      goBackToCars() {
        this.$router.push('/cars')
      }
    },
    watch: {
      $route(toR, fromR) {
        this.id = toR.params['id']
      }
    }
  }
</script>

<style scoped>

</style>
