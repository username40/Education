<template>
  <div>
    <h2>social network</h2>
<!--    in work with checkbox v-model has some interesting moments-->
<!--    you must transfer value of your input inside array in data-->
    <label><input type="checkbox" value="vk" v-model="social">vkontakte</label>
    <label><input type="checkbox" value="facebook" v-model="social">facebook</label>
    <label><input type="checkbox" value="instagram" v-model="social">instagram</label>

    <hr>

    <ul>
      <li v-for="item in social">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                // you must create array in data
                // it filled when you choose some checkbox))
                social: []
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
