<template>
  <div>
    <app-car>
      <!-- after when you call your component and put inside code write name of slot -->
      <h2 slot="title">Mazda + html</h2>
      <p slot="text">Lorem ipsum dolor sit amet.</p>
    </app-car>
  </div>
</template>

<script>
    import Car from './Car'

    export default {
        name: 'app',
        components: {
            appCar: Car
        }
    }
</script>

<style>
</style>
