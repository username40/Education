<template>
  <div class="container pt-2">
    <app-counter/>
    <app-actions/>
  </div>
</template>

<script>
  import Counter from "./Counter";
  import Actions from "./Actions";

  export default {
    name: 'app',
    components: {
      appCounter: Counter,
      appActions: Actions
    }
  }
</script>

<style scoped>

</style>
