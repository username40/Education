// mixins you can use when you need DRY
// in this .js file you create your mixin and connect in your components
export default {
  data() {
    return {
      names: ['Slava', 'Julia', 'Denis'],
      searchName: ''
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}
