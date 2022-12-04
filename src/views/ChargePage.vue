<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">이번달 관리비</div>
          <div class="section-top-right">
            101동 102호
          </div>
        </div>
        <div class="section-fee-contents">
          <div class="section-fee-contents-left">
            <div class="card background-shadow section-fee-monthly">

            </div>
            <div class="card background-shadow section-fee-monthly-detail"></div>
          </div>
          <div class="section-fee-contents-right card background-shadow">

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
  //TODO: name 변경
  name: "ChargePage",
  components: {SideBar, NavigationBar},
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/fee-main.css";
</style>
