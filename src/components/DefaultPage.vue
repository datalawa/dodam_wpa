<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar></SideBar>
    <div id="section-main-content">
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  name: "DefaultPage",
  components: {SideBar, NavigationBar}
}
</script>

<style>
  #section-main {
    display: flex;
    padding: 0;
    /*overflow-y: scroll;*/
  }

  SideBar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    order: 0;
  }

  #section-main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 38px;

    flex: 1;
    order: 1;
  }
</style>