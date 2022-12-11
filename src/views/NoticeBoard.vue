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
        <div v-if="total_count > 0" class="card background-shadow section-board-content-root type2">
          <BoardItemType2 v-for="item in article_data" v-bind:key="item"
                          :title="item.post_title" :pk="item.post_pk"
                          :author="item.user_user_pk.user_nm"
                          :write-time="item.post_write_time.substring(0, 10)"></BoardItemType2>
        </div>
        <v-pagination
          v-if="total_count > 0"
          class="paginator"
          v-model="page"
          :length="Math.ceil(total_count / 25)"
          @update:modelValue="getArticles"
        ></v-pagination>
      </div>
    </div>
    <div class="main-floating-write-button" @click="onArticleWriteButtonClicked('notice')">
      <v-icon icon="mdi-pencil"></v-icon>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import BoardItemType2 from "@/components/list/BoardItemType2";
import { onArticleWriteButtonClicked } from "@/components/js/write-button";

export default {
  name: "NoticeBoard",
  components: {BoardItemType2, SideBar, NavigationBar},
  data() {
    return {
      article_data: [],
      total_count: 0,
      page: 1
    }
  },
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
          writeTime: writeTime,
        })
      }
      return articleDatas
    },
    async getArticles() {
      const result = await this.$axios.get(
        "https://api.springnote.blog/hub/board/post/?board_board_pk=1&page_size=25&page=" + this.page, {
          timeout: 5000
        },
      )
      console.log(result);

      if (result !== null && result.status == 200) {
        console.log(result)
        this.total_count = result.data.total_count;
        this.article_data = result.data.results
      } else {
        this.article_data = []
      }
    }
  },
  methods: {
    onArticleWriteButtonClicked
  },
  async mounted() {
    this.getArticles
  },
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/board-main.css";
</style>
