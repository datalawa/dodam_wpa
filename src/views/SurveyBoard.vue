<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar></SideBar>
    <div id="section-main-content">
      <h1>survey</h1>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  name: "SurveyBoard",
  components: {SideBar, NavigationBar},
}
</script>

<style>
  #section-main {
  display: flex;
  padding: 0;
  /*overflow-y: scroll;*/
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