<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar></SideBar>
    <div id="section-main-content" style="background: aqua"></div>
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

<style scoped>
  #section-main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;

    width: 100%;
    height: 200px;
    overflow-y: scroll;
  }

  SideBar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    height: 200px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  #section-main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 38px;

    height: 100%;

    flex: 1;
    order: 1;
  }
</style>