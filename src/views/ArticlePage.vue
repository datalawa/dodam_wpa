<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="post-root">
        <span class="material-icons-round goBack" @click="goBack">close</span>
        <div class="post-right">
          <div v-if="exist" class="post-right-top">
            <div class="post-top-title">{{ article.post_title }}</div>
            <div class="post-top-view">{{ numberWithCommas(article.view_count) }}회</div>
            <div class="post-top-sub">
              <div class="post-top-sub-author">{{ article.user_user_pk.user_nm }}</div>
              <hr class="updown">
              <div class="post-top-sub-author">{{ article.post_write_time.substring(0, 10) }}</div>
            </div>
          </div>
          <md-editor class="post-content" v-model="article.post_text" language="en-US" :previewOnly="true"/>
          <hr class="leftright">
          <div class="post-comment-root">
            <div class="post-info">
              <div class="post-info-item">
                <span class="material-icons-round">chat</span>
                <div class="post-info-text">댓글 {{ numberWithCommas(article.comment_count) }}개</div>
              </div>
              <hr class="updown">
              <div class="post-info-item">
                <span class="material-icons-round icon-pink-f">favorite</span>
                <div class="post-info-text">좋아요 {{ numberWithCommas(article.like_count) }}개</div>
              </div>
            </div>
            <Comment v-for="item in comment_list" :key="item" :reply="item.reply" :depth="0"
                    :writer-name="item.user_user_pk.user_nm" :content="item.comment_text"
                    :wirte-time="item.comment_write_time.substring(0, 10) + ' ' + item.comment_write_time.substring(11, 19)"></Comment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Comment from "@/components/Comment";

function numberWithCommas(x) {
  return String(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
</script>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import router from "@/routers/router";
export default {
  //TODO: name 변경
  name: "ArticlePage",
  components: {SideBar, NavigationBar},
  data() {
    return {
      article: {},
      comment_list: [],
      exist: false
    }
  },
  props: {
    post_pk: 0
  },
  computed: {
    async getArticles() {
      const result = await this.$axios.get(
        "https://api.springnote.blog/hub/board/post/" + this.post_pk, {
          timeout: 5000
        },
      )
      // console.log(result);
      if (result !== null && result.status == 200) {
        console.log(result)
        this.article = result.data
        this.exist = true;
      } else {
        this.article = {}
      }
    },
    async getComment() {
      const result = await this.$axios.get(
        "https://api.springnote.blog/hub/board/post/comment/?post_post_pk=" + this.post_pk, {
          timeout: 5000
        },
      )
      // console.log(result);
      if (result !== null && result.status == 200) {
        console.log(result)
        this.comment_list = result.data.results
      } else {
        this.comment_list = []
      }
    }
  },
  async mounted() {
    this.getArticles
    this.getComment
  },
  methods: {
    goBack() {
      router.back(-1)
    }
  }
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/post-main.css";
</style>
