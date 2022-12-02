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
          writeTime: writeTime.toISOString().substring(0, 10),
        })
      }
      return articleDatas
    }
  },
  mounted() {
    const graphCanvas = document.getElementById("dashboard-section-graph-view");
    const canvasWidth = graphCanvas.offsetWidth * 2;
    const canvasHeight = graphCanvas.offsetHeight * 2
    graphCanvas.width = canvasWidth;
    graphCanvas.height = canvasHeight;

    const yAxisHeight = 60 * 2;
    const yPaddingTop = 20 * 2;
    const xAxisHeight = 60 * 2;

    const maxCost = 250000 + 50000

    if (graphCanvas.getContext) {
      var ctx = graphCanvas.getContext("2d");

      const line_y = []
      var nowCost = maxCost;
      for (var i = yPaddingTop;i <= canvasHeight - yAxisHeight;i += (canvasHeight - (yAxisHeight + yPaddingTop)) / 5) {
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
      }
      console.log(line_y);
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