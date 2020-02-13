<template>
  <section>
    <h1>Users page</h1>
    <ul>
      <li v-for="user in users" :key="user">
        <a href="#" @click.prevent="goTo(user)">User {{ user }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "users",
      data: () => ({
        users: [1,2,3,4,5]
      }),
      methods: {
          goTo(user) {
            this.$router.push('/users/' + user)
          }
      }
    }
</script>

<style scoped>

</style>
