<template>
<!--  <nav>-->
<!--      <router-link to="/">dash</router-link> |-->
<!--      <router-link to="/free">free</router-link> |-->
<!--      <router-link to="/complain">complain</router-link> |-->
<!--      <router-link to="/survey">survey</router-link>-->
    <!-- convert -->
    <!-- <a href="#/main" class="">main</a> -->
<!--  </nav>-->
  <nav class="navbar-top">
    <div class="navbar-alert">
      <span class="material-icons-outlined icon-color-button-gray">notifications</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

.navbar-top {
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 20px;
  gap: 19px;
}
</style>