<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-content">
      <h1>complain</h1>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  name: "ComplainBoard",
  components: {SideBar, NavigationBar},
}
</script>

<style>
@import "../css/view-main.css";
</style>