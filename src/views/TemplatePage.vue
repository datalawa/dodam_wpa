<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-content">
      <!--TODO: 화면 구현은 여기에-->
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