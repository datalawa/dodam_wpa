<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="dashboard-root">
        <div class="dashboard-content-list card"></div>
      </div>
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
@import "../css/dashboard-main.css";
</style>

<style>
@import "../css/view-main.css";
</style>