<template>
  <div>
  <h1>{{ msg }}</h1>
    <input type="text" v-model="searchName">
  <ul>
    <li v-for="item in filteredNames">{{ item }}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        names: ['Slava', 'Julia', 'Denis'],
        searchName: ''
    }
  },
    computed: {
        filteredNames() {
            return  this.names.filter(name => {
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
            })
        }
    },
    // for creating filters use a special field
    // this looks like a creating local directives
    filters: {
      lowerCase(value) {
          return value.toLowerCase()
      }
    }
}
</script>

<style>
</style>
