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
          <div class="card background-shadow inout-root">
            <div class="section-inout-title">{{ selectedCarNum }} 입출차 기록</div>
            <v-table class="content-box">
              <thead>
              <tr>
                <th>
                  번호
                </th>
                <th>
                  날짜
                </th>
                <th>
                  동
                </th>
                <th>
                  호수
                </th>
                <th>
                  차종
                </th>
                <th>
                  구분
                </th>
                <th>
                  입차시간
                </th>
                <th>
                  출차시간
                </th>
              </tr>
              </thead>
              <tbody>
              <tr :key="i.idx" v-for="i in (0,20)">
                <td>{{ i }}</td>
                <td><InOutData :date="date"/>date</td>
                <td><InOutData :dong="dong"/>dong</td>
                <td><InOutData :ho="ho"/>ho</td>
                <td><InOutData :kind="kind"/>kind</td>
                <td><InOutData :visit="visit"/>visit</td>
                <td><InOutData :intime="intime"/>intime</td>
                <td><InOutData :outtime="outtime"/>outtime</td>
              </tr>
              </tbody>
            </v-table>
          </div>
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
  data: () => {
    return {
      selectedCarNum: '12가 3456'
    }
  }
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

.inout-root {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
