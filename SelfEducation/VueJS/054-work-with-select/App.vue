<template>
  <div>
    <h2>social network</h2>
    <select v-model="social">
      <option
        v-for="item in socialNetworks">{{ item }}</option>
    </select>
    <hr>
    <p>{{ social }}</p>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                defaultOption: 'facebook',
                social: 'facebook',
                socialNetworks: ['facebook', 'instagram', 'vk']
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
