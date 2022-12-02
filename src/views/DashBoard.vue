<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="dashboard-root">
        <div class="dashboard-section-top-cards">
          <DashboardCards icon="wallet" middle-text="₩ 240,030" bottom-text="저번달 납부금액"></DashboardCards>
          <DashboardCards icon="local_parking" middle-text="11.12 13:24:52" bottom-text="최근 입차 시각" end-text="32가 1234"></DashboardCards>
          <DashboardCards></DashboardCards>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import DashboardCards from "@/components/DashboardCards";
export default {
  name: "DashBoard",
  components: {DashboardCards, SideBar, NavigationBar},
}
</script>

<style scoped>
@import "../css/dashboard-main.css";
</style>

<style>
@import "../css/view-main.css";
</style>