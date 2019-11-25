<template>
  <div>
  <h1>Parent: {{ carName }}</h1>
<!--    if you need transfer some data into your components you should use props-->
<!--    use : and then write name of your props (it is match from name of props inside component)-->
<!--    better if you check it-->
    <app-car
      :carName="carName"
      :carYear="carYear"/>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      carName: 'Ford from Parent',
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
