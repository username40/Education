<template>
  <div>
    <h1>Hello vue!</h1>
<!--    textarea work with v-model same as input-->
<!--    but if you push enter and then continue writing your formatting is not showing-->
<!--    this resolving with css-->
    <textarea type="text" v-model="msg"></textarea>
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

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }
/*all you need is write white-space: pre on the your updating element*/
  p {
    white-space: pre;
  }
</style>
