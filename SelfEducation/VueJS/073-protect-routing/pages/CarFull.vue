<template>
  <div>
    <h4>Car Name: {{ $route.query.name }}</h4>
    <h5>Car Year: {{ year }}</h5>
    <div class="scroll"></div>
    <h6 id="scroll">Hello from the bottom</h6>
    <div class="scroll"></div>

  </div>
</template>

<script>
  export default {
    name: "CarFull",
    computed: {
      year() {
        return this.$route.query.year
      }
    },
    beforeRouteEnter(to, fromR, next) {
      console.log('beforeRouteEnter')
      next(false)
    }
  }
</script>

<style scoped>
  .scroll {
    width: 100px;
    height: 1000px;
    background-color: #cccccc;
  }
</style>
