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
    <button class="btn btn-primary" @click="loadCars">Load cars</button>
    <hr>
    <ul class="list-group">
      <li class="list-group-item"
          v-for="item in cars" :key="item.id">{{ item.name }} - {{ item.year }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        carName: '',
        carYear: '',
        cars: [],
        resource: null
      }
    },
    methods: {
      createCar() {
        const car = {
          name: this.carName,
          year: this.carYear
        }
        // this.$http.post('http://localhost:3000/cars', car)
        //   .then(response => {
        //     return response.json()
        //   })
        //   .then(newCar => {
        //     console.log(newCar)
        //   })
        // Here you can see how simple to use vue-resource
        // just one string
        this.resource.save({}, car)
      },
      // get query create as same like a POST but you use only one arg in query
      // it's a same promise and you can use this construction for GET queries
      loadCars() {
        // this.$http.get('http://localhost:3000/cars')
        //   .then(response => {
        //     return response.json()
        //   })
        //   .then(cars => {
        //     this.cars = cars
        //     console.log(cars)
        //   })
        // Here you can see how simple get data from server
        this.resource.get()
          .then(response => response.json())
          .then(cars => this.cars = cars)
      }
    },
    created() {
      this.resource = this.$resource('http://localhost:3000/cars')
    }
  }
</script>

<style scoped>

</style>
