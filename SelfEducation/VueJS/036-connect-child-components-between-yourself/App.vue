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
      :counter="counter"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
    @counterUpdated="counter = $event"/>
    <app-counter
      :counter="counter"/>
  </div>
</template>

<script>
  // This way very difficult - you must generate many actions? create data elem here
  // in other component create props
  // in third component - create $emit
  // Ok now it looks simple, but what you gonna do when you will have big application?
  // better if you will have event bus...
    import Counter from './Counter'
    import Car from './Car'

    export default {
        name: 'app',
        data() {
            return {
                counter: 0,
                carName: 'Ford',
                carYear: 2099,
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            changeNameToAudi() {
                this.carName = 'Audi'
            }
        },
        components: {
            appCounter: Counter,
            appCar: Car
        }
    }
</script>

<style>
</style>
