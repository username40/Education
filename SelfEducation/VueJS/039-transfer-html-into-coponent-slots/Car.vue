<template>
  <div>
    <!-- you can use 1 slot for all or many slots  but must give names-->
    <slot name="title"></slot>
    <hr>
    <hr>
    <slot name="text"></slot>
  </div>
</template>

<script>
    export default {
        name: "Car",
    }
</script>

<style scoped>
  div {
    border: 1px solid black;
    padding: 5px;
  }
</style>
