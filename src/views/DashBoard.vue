<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-content">
      <div class="dashboard-root card"></div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  name: "DashBoard",
  components: {SideBar, NavigationBar},
}
</script>

<style scoped>
  .dashboard-root {
    max-width: 1000px;
    width: 100%;
    height: 500px;
  }
</style>

<style>
@import "../css/view-main.css";
</style>