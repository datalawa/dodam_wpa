<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">공지게시판</div>
          <div class="section-board-search-root background-shadow">
            <input class="section-board-search-text" type="text" placeholder="글 검색"/>
            <div class="section-board-search-border"></div>
            <span class="material-icons-outlined section-board-search-image">search</span>
          </div>
        </div>
        <div class="card background-shadow section-board-content-root type2">
          <BoardItemType2 v-for="item in getTestArticleList" v-bind:key="item"
                          :title="item.title" :author="item.author"
                          :write-time="item.writeTime"></BoardItemType2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import BoardItemType2 from "@/components/list/BoardItemType2";
export default {
  name: "NoticeBoard",
  components: {BoardItemType2, SideBar, NavigationBar},
  computed: {
    getTestArticleList() {
      let articleDatas = []
      let writeTime = new Date();

      for (let i = 0;i < 50;i++) {
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
  }
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/board-main.css";
</style>