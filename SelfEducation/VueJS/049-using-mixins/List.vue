<template>
    <div>
      <h1>List</h1>
      <input type="text" v-model="searchName">
      <ul>
        <li v-for="item in filteredNames">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
  import ListMixin from './listMixin'
    export default {
        name: "List",
        // mixins is array
        mixins: [ListMixin]
    }
</script>

<style scoped>

</style>
