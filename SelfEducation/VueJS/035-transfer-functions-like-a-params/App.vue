<template>
  <div>
  <h1>Parent: {{ carName }}</h1>

<!--    this is a way to transfer some function iside component-->
<!--    bind it-->
<!--    write your functions inside methods in this component-->
<!--    then write in props inside child component-->
<!--    it's a simple-->
    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
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
    methods: {
      changeNameToAudi() {
          this.carName = 'Audi'
      }
    }
}
</script>

<style>
</style>
