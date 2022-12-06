<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">입출차 기록</div>
<!--          <div class="section-top-right">-->
<!--            101동 102호-->
<!--          </div>-->
        </div>
        <div class="section-fee-contents">
          <div class="section-inout-cards">
            <InOutCard></InOutCard>
            <InOutCard></InOutCard>
            <InOutCard></InOutCard>
            <InOutCard></InOutCard>
            <InOutCard></InOutCard>
            <InOutCard></InOutCard>
            <InOutCard></InOutCard>
          </div>
          <InOutListView></InOutListView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import InOutCard from "@/components/InOutCard.vue";
import InOutListView from "@/views/datalawa/InOutListView.vue";
export default {
  name: "CarInOutPage",
  components: {InOutListView, InOutCard, SideBar, NavigationBar},
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/inout-main.css";
</style>

<style scoped>
.section-fee-contents {
  flex-direction: column !important;
}
</style>
