<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">자유게시판</div>
          <div class="section-board-search-root background-shadow">
            <input class="section-board-search-text" type="text" placeholder="글 검색"/>
            <div class="section-board-search-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  name: "FreeBoard",
  components: {SideBar, NavigationBar},
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/board-main.css";
</style>