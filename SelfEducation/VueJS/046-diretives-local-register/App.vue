<template>
  <div>
    <h2 v-colored:background.font="'red'">{{ title }}</h2>
    <h2 v-colored:color.delay="'blue'">{{ title }}</h2>
<!--    after js manipulations call your local directive-->
<!--    you can use your directive only inside this components-->
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
  // for creating directives you must write a special field - directives
  directives: {
    // then create object that you will use like a directive
    // and write there your function
      font: {
        bind(el, bindings, vNode) {
          el.style.fontSize = '40px'
        }
      }
    }
}
</script>

<style scoped>

</style>
