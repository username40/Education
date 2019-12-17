<template>
    <div>
<!--      Inside component for take this params use $route.query.sameNameOfYourParam-->
      <h4>Car Name: {{ $route.query.name }}</h4>
<!--      or you can use computed-->
      <h5>Car Year: {{ year }}</h5>
    </div>
</template>

<script>
    export default {
        name: "CarFull",
      computed: {
          year() {
            return this.$route.query.year
          }
      }
    }
</script>

<style scoped>

</style>
