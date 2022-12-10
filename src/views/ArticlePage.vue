<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      {{ post_pk }}
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  //TODO: name 변경
  name: "ArticlePage",
  components: {SideBar, NavigationBar},
  props: {
    post_pk: 0
  }
}
</script>

<style>
@import "../css/view-main.css";
</style>
