<template>
  <div>
  <h1>Parent: {{ carName }}</h1>

<!--    so, write name of event (it must match name of event), then you write what you want to -->
<!--    transfer-->
    <app-car
      :carName="carName"
      :carYear="carYear"
      @nameChanged="carName = $event"/>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      carName: 'Ford',
        carYear: 2099,
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components: {
    }
}
</script>

<style>
</style>
