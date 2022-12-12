<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">관리비</div>
          <div class="section-top-right">
            101동 102호
          </div>
        </div>
        <div class="section-fee-contents">
          <div class="section-fee-contents-left">
            <div class="card background-shadow section-fee-monthly">
              <div class="section-fee-monthly-selector">
                <select class="section-fee-selector" @change="onYearChange">
                  <option :selected="i === selectedYearIdx" class="section-fee-selector-item" v-for="(d, i) in year" :key="i" :value="i">{{ d }}</option>
                </select>
                <select class="section-fee-selector" @change="onMonthChange">
                  <option :selected="i === selectedMonthIdx" class="section-fee-selector-item" v-for="(d, i) in month" :key="i" :value="i">{{ d }}</option>
                </select>
              </div>
              <div class="section-fee-montly-middle">
                <div class="section-fee-monthly-fee">
                  {{ billData.length > 0?numberWithCommas(billData[0].our):0 }}원
                </div>
                <v-btn
                  icon="mdi-credit-card-outline"
                  variant="tonal"
                  color="primary"
                  @click="onCLickedPayments"
                ></v-btn>
              </div>
<!--              <div class="section-fee-monthly-deadline">납부 마감일: 2022.09.25</div>-->
            </div>
            <div class="card background-shadow section-fee-monthly-detail">
              <div class="section-fee-detail-top">
                <div class="section-fee-detail-top-title dashboard-text-title">관리비 분석</div>
                <div v-if="billData.length > 0" class="section-fee-detail-top-sub">
                  평균대비
                  <div v-if="billData[0].our - billData[0].avg < 0" class="section-fee-detail-top-sub-money text-blue">{{ numberWithCommas(billData[0].our - billData[0].avg) }}원</div>
                  <div v-else class="section-fee-detail-top-sub-money text-red">{{ numberWithCommas(billData[0].our - billData[0].avg) }}원</div>
                </div>
                <div v-else class="section-fee-detail-top-sub">
                  평균대비 0원
                </div>
              </div>
              <div class="section-fee-detail-middle">
                <div class="section-fee-detail-info">
                  <div class="section-fee-detail-info-top">
                    <div class="section-fee-detail-info-top-title">우리집</div>
                    <div class="section-fee-detail-info-top-price">
                      {{ billData.length > 0?numberWithCommas(billData[0].our):0 }}원
                    </div>
                  </div>
                  <canvas id="section-fee-graph-our"></canvas>
                </div>
                <div class="section-fee-detail-info">
                  <div class="section-fee-detail-info-top">
                    <div class="section-fee-detail-info-top-title">전체평균</div>
                    <div class="section-fee-detail-info-top-price">
                      {{ billData.length > 0?numberWithCommas(billData[0].avg):0 }}원
                    </div>
                  </div>
                  <canvas id="section-fee-graph-avg"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="section-fee-contents-right card background-shadow">
            <div class="dashboard-text-title">납부금액 추이</div>
            <canvas id="section-fee-graph-view"></canvas>
          </div>
        </div>
        <div class="section-fee-list">
          <div class="section-fee-personal background-shadow card">
            <div class="fee-text-title">개인부과 목록</div>
            <hr class="dashed">
            <div class="section-board-content-root dashboard-section-article-list">
              <PaymentDetailItem v-for="item in resultper" v-bind:key="item"
                                 :title="item.name" :price="item.cost"></PaymentDetailItem>
            </div>
            <hr class="sec dashed">
            <div class="section-fee-total">
              <div class="section-fee-total-title">합계</div>
              <div class="section-fee-total-amount">
                {{ billData.length > 0?numberWithCommas(totalper):0 }}원
              </div>
            </div>
          </div>
          <div class="section-fee-common background-shadow card">
            <div class="fee-text-title">공동부과 목록</div>
            <hr class="dashed">
            <div class="section-board-content-root dashboard-section-article-list">
              <PaymentDetailItem v-for="item in resultpublic" v-bind:key="item"
                              :title="item.name" :price="item.per_cost"></PaymentDetailItem>
            </div>
            <hr class="sec dashed">
            <div class="section-fee-total">
              <div class="section-fee-total-title">합계</div>
              <div class="section-fee-total-amount">
                {{ billData.length > 0?numberWithCommas(totalpublic):0 }}원
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import router from "@/routers/router";
import PaymentDetailItem from "@/components/list/PaymentDetailItem";
import axios from "axios";
import {useStore} from "vuex";
import {computed} from "vue";
import { range } from "rxjs";

export default {
  name: "ChargePage",
  components: {
    SideBar,
    NavigationBar, PaymentDetailItem
  },
  setup: () => {
    const store = useStore()
    return {
      user: computed(() => store.state.user),
      role: computed(() => store.state.role),
      idToken: computed(() => store.state.idToken),
      uid: computed(() => store.state.uid),
      authIsReady: computed(() => store.state.authIsReady),
      houseHold: computed(() => store.state.houseHold),
    }
  },
  data: () => {
    let dateTime = new Date()
    dateTime = new Date(dateTime.toISOString().substring(0, 7) + '-01')
    dateTime.setMonth(dateTime.getMonth() - 1)

    let month = []
    let selectedMonthIdx = 0
    let selectedYearIdx = 0
    for (let i = 10;i < 12;i++) {
      month.push(i + "월")
      if (dateTime.getMonth() + 1 === i) selectedMonthIdx = i - 10
    }
    let year = []
    let idx = 0
    for (let i = 2022;i < dateTime.getFullYear() + 1;i++) {
      year.push(i + "년")
      if (dateTime.getFullYear() === i) selectedYearIdx = idx
      idx += 1
    }

    return {
      selectedDate: dateTime,
      month: month,
      year: year,
      selectedMonthIdx: selectedMonthIdx,
      selectedYearIdx: selectedYearIdx,
      resultper: [],
      resultpublic: [],
      totalper: 0,
      totalpublic: 0,
      billData: []
    }
  },
  async mounted() {
    // const graphCanvas = document.getElementById("section-fee-graph-view");
    window.addEventListener('resize', this.drawGraph);
    // graphCanvas.addEventListener("animationstart", this.drawGraph);
    // graphCanvas.addEventListener("animationend", this.drawGraph);
    // graphCanvas.addEventListener("animationiteration", this.drawGraph);
    if (this.authIsReady) {
      this.getBillDate();
      this.getBillHouseHold();
    }
  },
  unmounted() {
    // const graphCanvas = document.getElementById("section-fee-graph-view");
    window.removeEventListener('resize', this.drawGraph);
    // graphCanvas.removeEventListener("animationstart", this.drawGraph);
    // graphCanvas.removeEventListener("animationend", this.drawGraph);
    // graphCanvas.removeEventListener("animationiteration", this.drawGraph);
  },
  methods: {
    onYearChange(e) {
      console.log(e.target.value)
      this.selectedYearIdx = e.target.value
      this.selectedDate = new Date(
        this.year[this.selectedYearIdx].substring(0, 4) + '-' +
        this.month[this.selectedMonthIdx].substring(0, 2) + '-01')
      console.log(this.selectedDate.toISOString())
      if (this.authIsReady) {
        this.getBillDate();
        this.getBillHouseHold();
      }
    },
    onMonthChange(e) {
      console.log(e.target.value)
      this.selectedMonthIdx = e.target.value
      this.selectedDate = new Date(
        this.year[this.selectedYearIdx].substring(0, 4) + '-' +
        this.month[this.selectedMonthIdx].substring(0, 2) + '-01')
      this.selectedMonthIdx = e.target.value
      if (this.authIsReady) {
        this.getBillDate();
        this.getBillHouseHold();
      }
    },
    onCLickedPayments() {
      console.log('ccc')
      router.push({path: '/payments'})
    },
    drawGraph() {
      const graphCanvas = document.getElementById("section-fee-graph-view");
      // console.log(graphCanvas)
      // console.log(this.graphCanvasWidth);
      // console.log(this.graphCanvasHeight);
      const data = this.billData
      const canvasWidth = graphCanvas.offsetWidth * 2;
      const canvasHeight = graphCanvas.offsetHeight * 2;
      graphCanvas.width = canvasWidth;
      graphCanvas.height = canvasHeight;
      const yAxisHeight = 60 * 2;
      const yPaddingTop = 20 * 2;
      const xAxisHeight = 60 * 2;

      let maxCost = 0
      for (let c of data) {
        maxCost = Math.max(maxCost, c.our, c.avg)
      }
      maxCost += 50000
      if (graphCanvas.getContext) {
        var ctx = graphCanvas.getContext("2d");
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.beginPath();
        const line_y = [];
        let nowCost = maxCost;
        let i = yPaddingTop;
        for (let j = 0; j < 6; j++) {
          ctx.font = "700 25px Roboto";
          ctx.fillStyle = '#00000044';
          ctx.textAlign = "center";
          ctx.fillText(nowCost, xAxisHeight / 2, i + 7.5);
          nowCost -= maxCost / 5
          line_y.push(i);
          ctx.beginPath();
          ctx.lineTo(xAxisHeight, i);
          ctx.lineTo(canvasWidth, i);
          ctx.closePath();
          ctx.strokeStyle = '#00000044';
          ctx.stroke();
          i += (canvasHeight - (yAxisHeight + yPaddingTop)) / 5
        }
        // console.log(line_y);
        const line_x = [];
        const barchart_y = [];
        const xGraphPadding = 60 * 2;
        const xAxisStart = xAxisHeight + xGraphPadding;
        const xAxisEnd = canvasWidth - xGraphPadding;
        i = xAxisStart;

        const barLengthX = 20
        for (let j = data.length - 1;j > -1;j--) {
          ctx.font = "700 25px Roboto";
          ctx.fillStyle = '#00000044';
          ctx.textAlign = "center";
          ctx.fillText(data[j].month + '월', i, canvasHeight - yAxisHeight / 2);
          const ys = canvasHeight - yAxisHeight;
          let ye1 = -(data[j].our / maxCost) * (canvasHeight - yAxisHeight);
          let grd = ctx.createLinearGradient(0, ys, 0, 0);
          grd.addColorStop(0, "#f5af19");
          grd.addColorStop(1, "#f12711");
          ctx.fillStyle = grd;
          ctx.fillRect(i, ys, barLengthX, ye1);
          let ye2 = -(data[j].avg / maxCost) * (canvasHeight - yAxisHeight);
          grd = ctx.createLinearGradient(0, ys, 0, 0);
          grd.addColorStop(0, "#4286f4");
          grd.addColorStop(1, "#373B44");
          ctx.fillStyle = grd;
          ctx.fillRect(i, ys, -barLengthX, ye2);
          line_x.push(i);
          barchart_y.push([[i, i + barLengthX, ys, ye1], [i - barLengthX, i, ys, ye2]])
          i += (xAxisEnd - xAxisStart) / (data.length - 1)
        }
        let grd = ctx.createLinearGradient(0, 40, 0, 0);
        grd.addColorStop(0, "#f5af19");
        grd.addColorStop(1, "#f12711");
        ctx.fillStyle = grd;
        ctx.fillRect(canvasWidth - 320, 0, 40, 40);
        ctx.font = "700 25px Roboto";
        ctx.fillStyle = '#00000044';
        ctx.textAlign = "start";
        ctx.fillText('우리집', canvasWidth - 320 + 50, 30);
        grd = ctx.createLinearGradient(0, 40, 0, 0);
        grd.addColorStop(0, "#4286f4");
        grd.addColorStop(1, "#373B44");
        ctx.fillStyle = grd;
        ctx.fillRect(canvasWidth - 160, 0, 40, 40);
        ctx.font = "700 25px Roboto";
        ctx.fillStyle = '#00000044';
        ctx.textAlign = "start";
        ctx.fillText('전체평균', canvasWidth - 160 + 50, 30);

        const graphCanvasOur = document.getElementById("section-fee-graph-our");
        const canvasWidthOur = graphCanvasOur.offsetWidth;
        const canvasHeightOur = graphCanvasOur.offsetHeight;
        graphCanvasOur.width = canvasWidthOur;
        graphCanvasOur.height = canvasHeightOur;

        const max = Math.max(data[0].avg, data[0].our);
        if (graphCanvasOur.getContext) {
          let ctx = graphCanvasOur.getContext("2d");
          ctx.clearRect(0, 0, canvasWidthOur, canvasHeightOur);
          ctx.beginPath();
          ctx.fillStyle = '#F1F1F1';
          ctx.fillRect(0, 0, canvasWidthOur, canvasHeightOur);
          grd = ctx.createLinearGradient(0, 0, canvasWidthOur, 0);
          grd.addColorStop(0, "#f5af19");
          grd.addColorStop(1, "#f12711");
          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, (data[0].our / max) * canvasWidthOur, canvasHeightOur);
        }

        const graphCanvasAvg = document.getElementById("section-fee-graph-avg");
        const canvasWidthAvg = graphCanvasAvg.offsetWidth;
        const canvasHeightAvg = graphCanvasAvg.offsetHeight;
        graphCanvasAvg.width = canvasWidthAvg;
        graphCanvasAvg.height = canvasHeightAvg;

        if (graphCanvasAvg.getContext) {
          let ctx = graphCanvasAvg.getContext("2d");
          ctx.clearRect(0, 0, canvasWidthAvg, canvasHeightAvg);
          ctx.beginPath();
          ctx.fillStyle = '#F1F1F1';
          ctx.fillRect(0, 0, canvasWidthAvg, canvasHeightAvg);
          grd = ctx.createLinearGradient(0, 0, canvasWidthAvg, 0);
          grd.addColorStop(0, "#4286f4");
          grd.addColorStop(1, "#373B44");
          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, (data[0].avg / max) * canvasWidthAvg, canvasHeightAvg);
        }
      }
    },
    numberWithCommas(x) {
      return String(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    async getBillDate() {
      this.billData = []
      const bills = []
      let dateTime = this.selectedDate
      for (let i = 0;i < 4;i++) {
        const dtString = dateTime.toISOString().substring(0, 7) + '-01'
        try {
          const result = await this.$axios.get(
            "https://api.springnote.blog/api/v1/bill/data/" + dtString + "?isOnlyBill=true", {
              timeout: 5000,
              headers: {
                Authorization: "Bearer " + this.idToken
              }
            },
          )

          if (result !== null && result.status == 200) {
            // console.log("bill", dtString, result);
            let avg = 0
            let our = 0
            if (result.data.length > 0) {
              for (let item of result.data) {
                if (item.house_hold_id === this.houseHold) {
                  our = item.cost
                }
                avg += item.cost
              }
              avg = Math.floor(avg / result.data.length)
            }
            bills.push({'our': our, 'avg': avg, 'month': dateTime.getMonth() + 1})
          } else {
            console.error("bill not found")
            bills.push({'our': 0, 'avg': 0, 'month': dateTime.getMonth() + 1})
          }
        } catch (e) {
          bills.push({'our': 0, 'avg': 0, 'month': dateTime.getMonth() + 1})
        }
        dateTime.setMonth(dateTime.getMonth() - 1)
      }
      console.log(bills)
      this.billData = bills
      if (this.billData.length > 0) {
        this.drawGraph();
      }
    },
    async getBillHouseHold() {
      this.resultper = []
      this.resultpublic = []
      this.totalper = 0
      this.totalpublic = 0
      const dtString = this.selectedDate.toISOString().substring(0, 7) + '-01'
      const result = await this.$axios.get(
        "https://api.springnote.blog/api/v1/bill/data/" + dtString + "/household/" + this.houseHold, {
          timeout: 5000,
              headers: {
                Authorization: "Bearer " + this.idToken
              }
        },
      )
      console.log("household",result);


      if (result !== null && result.status == 200) {
        console.log(result)
        this.resultper = result.data.per_costs
        this.resultpublic = result.data.all_costs

        for (let i=0; i<this.resultper.length; i++) {
          this.totalper = this.totalper + this.resultper[i].cost}

        for (let i=0; i<this.resultpublic.length; i++) {
          this.totalpublic = this.totalpublic + this.resultpublic[i].per_cost}
      } else {
        alert("부과목록 오류")
      }
    }
  },
  computed: {
    getTestDetailArticleList() {
      let articleDatas = []
      for (let i = 0;i < 5;i++) {
        const price = (Math.random() + 1) * 1000
        articleDatas.push({
          title: '제목' + i,
          price: price,
        })
      }
      return articleDatas
    }
  },
  watch: {
    authIsReady: function (val) {
      if (val) {
        console.log(val)
        this.getBillHouseHold()
        this.getBillDate()
      }
    }
  }
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/fee-main.css";
</style>
