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
              <div class="section-fee-monthly-selector">
                <select class="section-fee-selector">
                  <option v-for="(d, i) in year" :key="i" :value="d">{{ d }}</option>
                </select>
                <select class="section-fee-selector">
                  <option v-for="(d, i) in month" :key="i" :value="d">{{ d }}</option>
                </select>
              </div>
              <div class="section-fee-montly-middle">
                <div class="section-fee-monthly-fee">{{ numberWithCommas(fee) }}원</div>
                <v-btn
                  icon="mdi-credit-card-outline"
                  variant="tonal"
                  color="primary"
                  @click="onCLickedPayments"
                ></v-btn>
              </div>
              <div class="section-fee-monthly-deadline">납부 마감일: 2022.09.25</div>
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

<script setup>
function numberWithCommas(x) {
  return String(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import router from "@/routers/router";

export default {
  name: "ChargePage",
  components: {
    SideBar,
    NavigationBar,
  },
  data: () => {
    let month = []
    for (let i = 1;i < 13;i++) {
      month.push(i + "월")
    }
    let year = []
    for (let i = 2018;i < 2023;i++) {
      year.push(i + "년")
    }
    return {
      month: month,
      year: year,
      fee: 150000
    }
  },
  methods: {
    onCLickedPayments() {
      console.log('ccc')
      router.push({path: '/payments'})
    }
  }
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/fee-main.css";
</style>
