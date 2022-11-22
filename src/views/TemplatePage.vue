<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar></SideBar>
    <div id="section-main-content">
      <
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  //TODO: name 변경
  name: "TempPage",
  components: {SideBar, NavigationBar},
}
</script>

<style>
@import "../css/view-main.css";
</style>