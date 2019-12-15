<template>
  <div class="container">
<!--    Make a simple navbar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
<!--            for creating SPA and routing without reload your page you must use router-link -->
<!--            it's work like a a tag-->
<!--            but you must use there not href attr, you must use to attr-->
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cars">Cars</router-link>
          </li>
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
