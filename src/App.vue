<template>
  <div id="app">
    <nav>
      <router-link to="/">dash</router-link> |
      <router-link to="/free">free</router-link> |
      <router-link to="/complain">complain</router-link> |
      <router-link to="/survey">survey</router-link>
    </nav>
    <!-- convert -->
    <!-- <a href="#/main" class="">main</a> -->
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
