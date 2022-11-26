<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">자유게시판</div>
          <div class="section-board-search-root background-shadow">
            <input class="section-board-search-text" type="text" placeholder="글 검색"/>
            <div class="section-board-search-border"></div>
            <span class="material-icons-outlined section-board-search-image">search</span>
          </div>
        </div>
        <div class="card background-shadow section-board-content-root">
          <BoardItemType1></BoardItemType1>
          <div class="section-board-content-divider"></div>
          <BoardItemType1></BoardItemType1>
          <div class="section-board-content-divider"></div>
          <BoardItemType1></BoardItemType1>
          <div class="section-board-content-divider"></div>
          <BoardItemType1></BoardItemType1>
          <div class="section-board-content-divider"></div>
          <BoardItemType1></BoardItemType1>
          <div class="section-board-content-divider"></div>
          <BoardItemType1></BoardItemType1>
          <div class="section-board-content-divider"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import BoardItemType1 from "@/components/list/BoardItemType1";
export default {
  name: "FreeBoard",
  components: {BoardItemType1, SideBar, NavigationBar},
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/board-main.css";
</style>