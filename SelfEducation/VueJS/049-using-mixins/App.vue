<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="item in filteredNames">{{ item }}</li>
    </ul>
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>
    import ListMixin from './listMixin'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mixins: [ListMixin],
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
