<template>
    <div class="car">
      <h3>Name: {{ carName }} / {{ reverseName }}</h3>
      <p>Year: {{ carYear }}</p>
      <button @click="changeName">Change name</button>
    </div>
</template>

<script>
    export default {
        name: "Car",
        // without validate
        // props: ['carName', 'carYear'],
        // with validate - it is object, where you can call all parametres that you need
        props: {
          carName: {
              type: String,
              required: true,
              default: 'Default Name'
          },
          carYear: Number
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('')
            }
        },
        data() {
            return {
            }
        },
        methods: {
            changeName() {
                this.carName = 'Mazda'
                // if you want to transfer something into parent component from child you should use
                // $emit - first - name of event, second - value of data
                this.$emit('nameChanged', this.carName)
                // after you must write about this emit into parent component
            }
        }
    }
</script>

<style scoped>
  .car {
    border: 1px solid black
  }

  .car h3 {
    margin-bottom: 5px;
  }
</style>
