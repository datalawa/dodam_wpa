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
          <div class="dashboard-section-graph card background-shadow">
            <div class="dashboard-text-title">납부금액 추이</div>
            <canvas id="dashboard-section-graph-view"></canvas>
          </div>
          <div class="dashboard-section-notice card background-shadow">
            <div class="dashboard-text-title">최근 공지사항</div>
            <div class="section-board-content-root dashboard-section-article-list">
              <BoardItemType2 v-for="item in getTestNoticeArticleList" v-bind:key="item"
                              :title="item.title" :author="item.author"
                              :write-time="item.writeTime"></BoardItemType2>
            </div>
          </div>
          <div class="dashboard-section-free card background-shadow">
            <div class="dashboard-text-title">자유게시판 인기글</div>
            <div class="section-board-content-root dashboard-section-article-list">
              <BoardItemType1 v-for="item in getTestFreeArticleList" v-bind:key="item"
                              :title="item.title" :content="item.content" :author="item.author"
                              :write-time="item.writeTime" :like-count="item.like" :comment-count="item.comment"></BoardItemType1>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import DashboardCards from "@/components/DashboardCards";
import BoardItemType1 from "@/components/list/BoardItemType1";
import BoardItemType2 from "@/components/list/BoardItemType2";
export default {
  name: "DashBoard",
  components: {BoardItemType2, BoardItemType1, DashboardCards, SideBar, NavigationBar},
  data: () => ({
    graphCanvasWidth: 1000,
    graphCanvasHeight: 1000
  }),
  computed: {
    getTestFreeArticleList() {
      let articleDatas = []
      let writeTime = new Date();
      for (let i = 0;i < 5;i++) {
        const author = Math.random().toString(36).substring(2, 12)
        writeTime = new Date(writeTime - ((Math.random(24 * 60) + 90) * 60000))
        articleDatas.push({
          title: '제목' + i,
          content: '내용' + i,
          author: author,
          writeTime: writeTime,
          like: Math.floor(Math.random() * 100),
          comment: Math.floor(Math.random() * 100),
        })
      }
      return articleDatas
    },
    getTestNoticeArticleList() {
      let articleDatas = []
      let writeTime = new Date();
      for (let i = 0;i < 5;i++) {
        const author = Math.random().toString(36).substring(2, 12)
        writeTime = new Date(writeTime - ((Math.random(24 * 60) + 90) * 60000))
        articleDatas.push({
          title: '제목' + i,
          author: author,
          writeTime: writeTime,
        })
      }
      return articleDatas
    }
  },
  mounted() {
    window.addEventListener('resize', this.drawGraph);
    this.drawGraph()
  },
  unmounted() {
    window.removeEventListener('resize', this.drawGraph);
  },
  methods: {
    drawGraph() {
      const graphCanvas = document.getElementById("dashboard-section-graph-view");
      // console.log(graphCanvas)
      this.graphCanvasWidth = graphCanvas.offsetWidth * 2;
      this.graphCanvasHeight = graphCanvas.offsetHeight * 2;
      // console.log(this.graphCanvasWidth);
      // console.log(this.graphCanvasHeight);
      const data = [
        {
          'month': '5월',
          'avg': 130000,
          'our': 120000
        },
        {
          'month': '6월',
          'avg': 140000,
          'our': 134596
        },
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
      const canvasWidth = this.graphCanvasWidth;
      const canvasHeight = this.graphCanvasHeight;
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
        for (let j = 0; j < data.length; j++) {
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
          ctx.fillRect(i, ys, 40, ye1);
          let ye2 = -(data[j].avg / maxCost) * (canvasHeight - yAxisHeight);
          grd = ctx.createLinearGradient(0, ys, 0, 0);
          grd.addColorStop(0, "#4286f4");
          grd.addColorStop(1, "#373B44");
          ctx.fillStyle = grd;
          ctx.fillRect(i, ys, -40, ye2);
          line_x.push(i);
          barchart_y.push([[i, i + 40, ys, ye1], [i - 40, i, ys, ye2]])
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
        // console.log((xAxisEnd - xAxisStart) / (data.length - 1))
        // console.log(line_x);
        // console.log(barchart_y);
        // graphCanvas.onmousemove = function(e) {
        //   const rect = this.getBoundingClientRect();
        //   let mouseX = Math.round(e.clientX - rect.left) * 2;
        //   let mouseY = Math.round(e.clientY - rect.top) * 2;
        //
        //   console.log('X ' + mouseX)
        //   console.log('Y ' + mouseY)
        //
        //   console.log(canvasWidth)
        //   console.log(canvasHeight)
        //
        //   for (const element of barchart_y) {
        //     for (const bar of element) {
        //       if ((bar[0] <= mouseX && mouseX <= bar[1]) && (bar[2] + bar[3] <= mouseY && mouseY <= bar[2])) {
        //         // console.log('in')
        //         // let grd = ctx.createLinearGradient(0, bar[2], 0, 0);
        //         // grd.addColorStop(0, "rgba(245,175,25,0.63)");
        //         // grd.addColorStop(1, "rgba(241,39,17,0.71)");
        //         ctx.fillStyle = 'black';
        //         ctx.fillRect(bar[0], bar[2], bar[1] - bar[0], bar[3]);
        //       }
        //     }
        //   }
        // }
        }
      }
    }
  }
  </script>

  <style scoped>
  @import "../css/dashboard-main.css";
  </style>

  <style>
  @import "../css/view-main.css";
  </style>
