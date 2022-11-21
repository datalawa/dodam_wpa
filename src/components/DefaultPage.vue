<script setup>
import DashBoard from "@/views/DashBoard";
import ComplainBoard from "@/views/ComplainBoard";
import FreeBoard from "@/views/FreeBoard";
import SurveyBoard from "@/views/SurveyBoard";

const components = {
  'dash': DashBoard,
  'complain': ComplainBoard,
  'free': FreeBoard,
  'survey': SurveyBoard,
}
</script>

<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar></SideBar>
    <div id="section-main-content">
      <keep-alive>
        <component :is="components[selectedCompCode]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";

export default {
  name: "DefaultPage",
  components: {SideBar, NavigationBar},
  data() {
    return {
      selectedCompCode: 'dash'
    }
  }
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