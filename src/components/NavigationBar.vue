<template>
  <nav class="navbar-top">
    <div class="navbar-right">
      <span class="material-icons-round">menu</span>
      <div class="navbar-title">도담도담</div>
    </div>
    <div class="navbar-alert">
      <span class="material-icons-outlined icon-color-button-gray">notifications</span>
    </div>
    <div class="navbar-user-left">
      <div class="navbar-user-name">userName</div>
      <div class="navbar-user-profile"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>
@import "../css/navbar-main.css";
</style>