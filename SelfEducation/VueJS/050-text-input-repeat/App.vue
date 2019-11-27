<template>
  <div>
    <h1>Hello vue!</h1>
    <input type="text" v-model="msg">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: ''
            }
        },
    }
</script>

<style>
</style>
