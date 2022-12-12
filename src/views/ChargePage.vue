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
                <select class="section-fee-selector">
                  <option class="section-fee-selector-item" v-for="(d, i) in year" :key="i" :value="d">{{ d }}</option>
                </select>
                <select class="section-fee-selector">
                  <option class="section-fee-selector-item" v-for="(d, i) in month" :key="i" :value="d">{{ d }}</option>
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
            <div class="card background-shadow section-fee-monthly-detail">
              <div class="section-fee-detail-top">
                <div class="section-fee-detail-top-title dashboard-text-title">관리비 분석</div>
                <div class="section-fee-detail-top-sub">
                  평균대비 <div class="section-fee-detail-top-sub-money text-blue">-15300원</div>
                </div>
              </div>
              <div class="section-fee-detail-middle">
                <div class="section-fee-detail-info">
                  <div class="section-fee-detail-info-top">
                    <div class="section-fee-detail-info-top-title">우리집</div>
                    <div class="section-fee-detail-info-top-price">{{ numberWithCommas(fee) }}원</div>
                  </div>
                  <canvas id="section-fee-graph-our"></canvas>
                </div>
                <div class="section-fee-detail-info">
                  <div class="section-fee-detail-info-top">
                    <div class="section-fee-detail-info-top-title">전체평균</div>
                    <div class="section-fee-detail-info-top-price">{{ numberWithCommas(fee) }}원</div>
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
              <PaymentDetailItem v-for="item in result.data.per_costs" v-bind:key="item"
                                 :title="item.name" :price="item.cost"></PaymentDetailItem>
            </div>
            <hr class="sec dashed">
            <div class="section-fee-total">
              <div class="section-fee-total-title">합계</div>
              <div class="section-fee-total-amount">{{ numberWithCommas(9483) + '원' }}</div>
            </div>
          </div>
          <div class="section-fee-common background-shadow card">
            <div class="fee-text-title">공동부과 목록</div>
            <hr class="dashed">
            <div class="section-board-content-root dashboard-section-article-list">
              <PaymentDetailItem v-for="item in result.data.all_costs" v-bind:key="item"
                              :title="item.name" :price="item.cost"></PaymentDetailItem>
            </div>
            <hr class="sec dashed">
            <div class="section-fee-total">
              <div class="section-fee-total-title">합계</div>
              <div class="section-fee-total-amount">{{ numberWithCommas(9483) + '원' }}</div>
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
    }
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
  mounted() {
    // const graphCanvas = document.getElementById("section-fee-graph-view");
    window.addEventListener('resize', this.drawGraph);
    // graphCanvas.addEventListener("animationstart", this.drawGraph);
    // graphCanvas.addEventListener("animationend", this.drawGraph);
    // graphCanvas.addEventListener("animationiteration", this.drawGraph);
    this.drawGraph();
    // this.getBillDate();
    // this.getBillHouseHold();
  },
  unmounted() {
    // const graphCanvas = document.getElementById("section-fee-graph-view");
    window.removeEventListener('resize', this.drawGraph);
    // graphCanvas.removeEventListener("animationstart", this.drawGraph);
    // graphCanvas.removeEventListener("animationend", this.drawGraph);
    // graphCanvas.removeEventListener("animationiteration", this.drawGraph);
  },
  methods: {
    onCLickedPayments() {
      console.log('ccc')
      router.push({path: '/payments'})
    },
    drawGraph() {
      const graphCanvas = document.getElementById("section-fee-graph-view");
      // console.log(graphCanvas)
      // console.log(this.graphCanvasWidth);
      // console.log(this.graphCanvasHeight);
      const data = [
        {
          'month': '7월',
          'avg': 193000,
          'our': 184785
        },
        {
          'month': '8월',
          'avg': 213000,
          'our': 223435,
        },
        {
          'month': '9월',
          'avg': 173000,
          'our': 123435,
        }
      ]
      const canvasWidth = graphCanvas.offsetWidth * 2;
      const canvasHeight = graphCanvas.offsetHeight * 2;
      graphCanvas.width = canvasWidth;
      graphCanvas.height = canvasHeight;
      const yAxisHeight = 60 * 2;
      const yPaddingTop = 20 * 2;
      const xAxisHeight = 60 * 2;
      const maxCost = 250000 + 50000
      if (graphCanvas.getContext) {
        var ctx = graphCanvas.getContext("2d");
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
        for (let j = 0;j < data.length;j++) {
          ctx.font = "700 25px Roboto";
          ctx.fillStyle = '#00000044';
          ctx.textAlign = "center";
          ctx.fillText(data[j].month, i, canvasHeight - yAxisHeight / 2);
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

        const max = Math.max(data[2].avg, data[2].our);
        if (graphCanvasOur.getContext) {
          let ctx = graphCanvasOur.getContext("2d");
          ctx.fillStyle = '#F1F1F1';
          ctx.fillRect(0, 0, canvasWidthOur, canvasHeightOur);
          grd = ctx.createLinearGradient(0, 0, canvasWidthOur, 0);
          grd.addColorStop(0, "#f5af19");
          grd.addColorStop(1, "#f12711");
          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, (data[2].our / max) * canvasWidthOur, canvasHeightOur);
        }

        const graphCanvasAvg = document.getElementById("section-fee-graph-avg");
        const canvasWidthAvg = graphCanvasAvg.offsetWidth;
        const canvasHeightAvg = graphCanvasAvg.offsetHeight;
        graphCanvasAvg.width = canvasWidthAvg;
        graphCanvasAvg.height = canvasHeightAvg;

        if (graphCanvasAvg.getContext) {
          let ctx = graphCanvasAvg.getContext("2d");
          ctx.fillStyle = '#F1F1F1';
          ctx.fillRect(0, 0, canvasWidthAvg, canvasHeightAvg);
          grd = ctx.createLinearGradient(0, 0, canvasWidthAvg, 0);
          grd.addColorStop(0, "#4286f4");
          grd.addColorStop(1, "#373B44");
          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, (data[2].avg / max) * canvasWidthAvg, canvasHeightAvg);
        }
      }
    },
    numberWithCommas(x) {
  return String(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    async getBillDate() {
      const result = await this.$axios.get(
        "https://api.springnote.blog/api/v1/bill/data/2022-09-01", {
          timeout: 5000,
              headers: {
                Authorization: "Bearer " + this.idToken
              }
        },
      )
      console.log("bill",result);


      if (result !== null && result.status == 200) {
        console.log(result)
        this.total_count = result.data.total_count;
        this.article_data = result.data.results
      } else {
        this.article_data = []
      }
    },
    async getBillHouseHold() {
      const result = await this.$axios.get(
        "https://api.springnote.blog/api/v1/bill/data/2022-09-01/household/4", {
          timeout: 5000,
              headers: {
                Authorization: "Bearer " + this.idToken
              }
        },
      )
      console.log("household",result);


      if (result !== null && result.status == 200) {
        console.log(result)
        this.total_count = result.data.total_count;
        this.article_data = result.data.results
      } else {
        this.article_data = []
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
    idToken: function (val) {
      console.log(val)
      this.getBillHouseHold()
      this.getBillDate()
    }
}
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/fee-main.css";
</style>
