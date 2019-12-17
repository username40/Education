<template>
  <div>
    <h1>Cars page</h1>
    <ul>
<!--      you can generate list use v-for-->
      <router-link
        tag="li"
        v-for="car in 5"
        :to="'/car/' + car"
        :key="car">
        <a>Car {{ car }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Cars"
    }
</script>

<style scoped>

</style>
