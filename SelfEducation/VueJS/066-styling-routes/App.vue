<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
<!--          so, if you want to styling your links you can use router link-->
<!--          you can use attr tag for creating valid html-->
<!--          write active class - he will be use only when you stay on the page which you click-->
<!--          write exact for full matching routes and stay only one link active-->
          <router-link tag="li" class="nav-link" exact to="/" active-class="active">
<!--            also inside you can write any html because inside router-link use slot-->
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style scoped>

</style>
