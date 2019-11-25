<template>
    <div class="car">
      <h3>Name: {{ carName }} / {{ reverseName }}</h3>
      <p>Year: {{ carYear }}</p>
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
