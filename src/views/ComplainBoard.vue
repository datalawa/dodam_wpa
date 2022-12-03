<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">민원/QnA</div>
          <div class="section-board-search-root background-shadow">
            <input class="section-board-search-text" type="text" placeholder="글 검색"/>
            <div class="section-board-search-border"></div>
            <span class="material-icons-outlined section-board-search-image">search</span>
          </div>
        </div>
        <div class="card background-shadow section-board-content-root type2">
          <ComplainItem v-for="item in getTestArticleList" v-bind:key="item"
                          :title="item.title" :author="item.author"
                          :write-time="item.writeTime" :is-complain="item.isComplain"></ComplainItem>
        </div>
      </div>
    </div>
    <div class="main-floating-write-button" @click="onArticleWriteButtonClicked('complain')">
      <v-icon icon="mdi-pencil"></v-icon>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import ComplainItem from "@/components/list/ComplainItem";
import { onArticleWriteButtonClicked } from "@/components/js/write-button";
export default {
  name: "ComplainBoard",
  components: {ComplainItem, SideBar, NavigationBar},
  computed: {
    getTestArticleList() {
      let articleDatas = []
      let writeTime = new Date();

      for (let i = 0; i < 50; i++) {
        const author = Math.random().toString(36).substring(2, 12)
        writeTime = new Date(writeTime - ((Math.random(24 * 60) + 90) * 60000))

        articleDatas.push({
          title: '제목' + i,
          author: author,
          writeTime: writeTime,
          isComplain: Math.random() < 0.5
        })
      }
      return articleDatas
    }
  },
  methods: {
    onArticleWriteButtonClicked
  }
}
</script>

<style>
@import "../css/view-main.css";
</style>