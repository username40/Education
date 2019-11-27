<template>
  <div>
    <h2>social network</h2>
<!--    if you use radio buttons with vue you should know that you don't need transfer name-->
<!--    just write v-model...-->
    <label><input type="radio" value="vk" v-model="social">vkontakte</label>
    <label><input type="radio" value="facebook" v-model="social">facebook</label>
    <label><input type="radio" value="instagram" v-model="social">instagram</label>

    <hr>
<!--and then call it-->
    <p>{{ social }}</p>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                // unlike checkbox for radio you should use string, not array
                social: ''
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
