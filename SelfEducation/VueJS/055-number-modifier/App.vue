<template>
  <div>
<!--    default is string, but if you want that is number - use .number-->
    <input type="text" v-model.number="age">
    <p>{{ age }}</p>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                age: 22
            }
        },
        watch: {
            // if you want watch for something you must name of your function same as data field
            age(value) {
                console.log(value)
                console.log(typeof value)
            }
        }
    }
</script>

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }
</style>
