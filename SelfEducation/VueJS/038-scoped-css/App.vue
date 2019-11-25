<template>
  <div>
    <app-counter/>
    <app-car/>
  </div>
</template>

<script>
    import Counter from './Counter'
    import Car from './Car'

    export default {
        name: 'app',
        components: {
            appCounter: Counter,
            appCar: Car
        }
    }
</script>

<style>
</style>
