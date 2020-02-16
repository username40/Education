<template>
    <div class="container">
      <nuxt />
    </div>
</template>

<script>
  // this is layout page
  // you can use it in everywhere in your app
  // where you call it
    export default {
        name: "empty"
    }
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
  }
</style>
