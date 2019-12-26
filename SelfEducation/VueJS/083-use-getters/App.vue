<template>
  <div class="container pt-2">
    <app-counter/>
    <app-second-counter/>
    <hr>
    <app-actions/>
  </div>
</template>

<script>
  import Counter from "./Counter";
  import Actions from "./Actions";
  import SecondCounter from "./SecondCounter";

  export default {
    name: 'app',
    components: {
      appCounter: Counter,
      appActions: Actions,
      appSecondCounter: SecondCounter
    }
  }
</script>

<style scoped>

</style>
