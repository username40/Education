<template>
  <div>
  <h1>{{ msg }}</h1>
    <app-car/>
<!--    after all this things just call it-->
    <app-car-two/>
  </div>
</template>

<script>
  // You can register you components local and use only there where you register it
  // at first you need do the same that you done like global - write import
  import Car2 from './Car2'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    // then you must use special object 'components' and give name of your component
    components: {
      appCarTwo: Car2
    }
}
</script>

<style>
</style>
