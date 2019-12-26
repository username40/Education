<template>
  <h2>Second Counter: {{ counter }}</h2>
</template>

<script>
  export default {
    name: "SecondCounter",
    computed: {
      counter() {
        return this.$store.state.counter * (7 - 2 * (5 + 4))
      }
    }
  }
</script>

<style scoped>

</style>
