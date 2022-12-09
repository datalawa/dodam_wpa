<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">입출차 기록</div>
          <div class="section-top-right">
            101동 102호
          </div>
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
            <div class="section-inout-title">입출차 기록</div>
            <v-table class="content-box">
              <thead>
              <tr>
                <th width="100px">구분</th>
                <th>차종</th>
                <th>목적</th>
                <th>날짜</th>
                <th>기록시각</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="item in getTestLog" :key="item.name">
                <td v-if="item.type" ><div class="board-item-inout-head head-red">출차</div></td>
                <td v-else><div class="board-item-inout-head head-blue">입차</div></td>
                <td>{{ item.carType }}</td>
                <td>{{ item.purpose }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.time }}</td>
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
  },
  computed: {
    getTestLog() {
      let articleDatas = []
      let writeTime = new Date();
      for (let i = 0;i < 20;i++) {
        const author = Math.random().toString(36).substring(2, 12)
        writeTime = new Date(writeTime - ((Math.random(24 * 60) + 720) * 60000))
        articleDatas.push({
          type: Math.random() > 0.5,
          carType: '경차',
          purpose: '방문',
          date: writeTime.toISOString().substring(0, 10),
          time: writeTime.toISOString().substring(11, 19)
        })
      }
      return articleDatas
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

td {
  text-align: center;
}

.board-item-inout-head {
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
}
</style>
