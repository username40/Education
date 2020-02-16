<template>
  <section>
<!--    this is reserved name of layout if you want to create 404 page you must use it-->
    <h1>Error 404</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </section>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    color: red
  }
</style>
