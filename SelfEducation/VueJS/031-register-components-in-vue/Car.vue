<template>
    <div>
      <h3>Name: {{ carName }}</h3>
      <p>Year: {{ carYear }}</p>
    </div>
</template>

<script>
    export default {
        name: "Car",
        data() {
            return {
                carName: 'Ford',
                carYear: 2016
            }
        }
    }
</script>

<style scoped>

</style>
