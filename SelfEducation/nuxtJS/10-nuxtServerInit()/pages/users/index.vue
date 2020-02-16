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
      // async fetch({store, error}){
      //     try {
      //       if(store.getters['users/users'].length === 0) {
      //         await store.dispatch('users/fetchUsers')
      //       }
      //     } catch (e) {
      //       error(e)
      //     }
      // },
      data: () => ({
        pageTitle: 'Users page'
      }),
      computed: {
          users() {
            return this.$store.getters['users/users']
          }
      },
      methods: {
          goTo(user) {
            this.$router.push('/users/' + user.id)
          }
      }
    }
</script>

<style scoped>

</style>
