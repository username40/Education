<template>
  <div>
  <h2>Form Inputs</h2>
    <app-on-off
      v-model="switched"/>
    <div>
      <h3 v-if="switched">Component is enabled</h3>
      <h3 v-else>Component is disabled</h3>
    </div>
  </div>
</template>

<script>
  import OnOff from "./OnOff"

    export default {
        name: 'app',
        data() {
            return {
                age: 22,
                switched: false
            }
        },
        watch: {
            // if you want watch for something you must name of your function same as data field
            age(value) {
                console.log(value)
                console.log(typeof value)
            }
        },
        components: {
            appOnOff: OnOff
        }
    }
</script>

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }
</style>
