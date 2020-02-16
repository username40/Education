<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="#" @click.prevent="goTo(user)">{{ user.name }} ({{ user.email }})</a>
      </li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "users",
      asyncData({$axios}) {
          return $axios.$get('https://jsonplaceholder.typicode.com/users')
            .then(users => {
              return {
                users
              }
            })
            .catch(err => {
              error(err)
            })
      },
      data: () => ({
        pageTitle: 'Users page'
      }),
      methods: {
          goTo(user) {
            this.$router.push('/users/' + user.id)
          }
      }
    }
</script>

<style scoped>

</style>
