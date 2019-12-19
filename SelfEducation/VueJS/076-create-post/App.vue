<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="year">Car year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>
    <button class="btn btn-success" @click="createCar">Create car</button>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        carName: '',
        carYear: ''
      }
    },
    methods: {
      createCar() {
        const car = {
          name: this.carName,
          year: this.carYear
        }
        // for creating post you can use vue-resource
        // use this construction for send request
        // it is promise you can do something after
        this.$http.post('http://localhost:3000/cars', car)
          .then(response => {
            return response.json()
          })
          .then(newCar => {
            console.log(newCar)
          })
      }
    }
  }
</script>

<style scoped>

</style>
