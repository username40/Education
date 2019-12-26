<template>
  <div>
  <h2>Counter: {{ counter }}</h2>
  </div>
</template>

<script>
  export default {
    name: "Counter",
    computed: {
      counter() {
        return this.$store.getters.computedCounter
      }
    }
  }
</script>
