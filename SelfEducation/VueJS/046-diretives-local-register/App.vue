<template>
  <div>
    <h2 v-colored:background.font="'red'">{{ title }}</h2>
    <h2 v-colored:color.delay="'blue'">{{ title }}</h2>
<!--    // after all manipulations you can call your directive only inside this component-->
    <h2 v-font>Local font Directive</h2>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hello! I\'m Vue!',
    }
  },
  // for creating directives use a special field
  directives: {
    // then you create object with name of your directive
      font: {
        // then inside object write a function
        bind(el, bindings, vNode) {
          el.style.fontSize = '40px'
        }
      }
    }
}
</script>

<style scoped>

</style>
