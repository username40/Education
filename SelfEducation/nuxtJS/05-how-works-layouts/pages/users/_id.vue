<template>
    <h1>{{ $route.params.id }}</h1>
</template>

<script>
    export default {
      validate({params}) {
        console.log(params)
        return /^\d+$/.test(params.id)
      }
    }
</script>

<style scoped>

</style>
