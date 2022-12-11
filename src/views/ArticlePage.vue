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
            <div v-if="article.board_board_pk === 3" class="top-info-complain">
              <div v-if="article.post_tag === 1" class="complianitem-complain-head head-red">민원</div>
              <div v-else class="complianitem-complain-head head-blue">QnA</div>
              <div v-if="article.post_refer === null" class="complain-status">답변대기</div>
              <div v-else class="complain-status">답변완료</div>
            </div>
            <div class="post-top-title">{{ article.post_title }}</div>
            <div class="post-top-view">{{ numberWithCommas(article.view_count) }}회</div>
            <div class="post-top-sub">
              <div class="post-top-sub-author">{{ article.user_user_pk.user_nm }}</div>
              <hr class="updown">
              <div class="post-top-sub-author">{{ article.post_write_time.substring(0, 10) }}</div>
              <hr v-if="uid === article.user_user_pk.user_pk || role >= 100" class="updown">
              <span v-if="uid === article.user_user_pk.user_pk || role >= 100"
                    class="material-icons-round" @click="articleDelete">delete</span>
            </div>
          </div>
          <md-editor class="post-content" v-model="article.post_text" language="en-US" :previewOnly="true"/>
          <hr class="leftright">
          <div v-if="article.board_board_pk !== 3" class="post-comment-root">
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
          <div v-else class="post-right">
            <div v-if="exist" class="post-right-top">
              <div class="post-top-title">{{ article.post_title }}</div>
              <div class="post-top-view">{{ numberWithCommas(article.view_count) }}회</div>
              <div class="post-top-sub">
                <div class="post-top-sub-author">{{ article.user_user_pk.user_nm }}</div>
                <hr class="updown">
                <div class="post-top-sub-author">{{ article.post_write_time.substring(0, 10) }}</div>
                <hr v-if="uid === article.user_user_pk.user_pk || role >= 100" class="updown">
                <span v-if="uid === article.user_user_pk.user_pk || role >= 100"
                      class="material-icons-round" @click="articleDelete">delete</span>
              </div>
            </div>
            <md-editor class="post-content" v-model="article.post_text" language="en-US" :previewOnly="true"/>
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
import {useStore} from "vuex";
import {computed} from "vue";

import Comment from "@/components/Comment";

import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';


export default {
  //TODO: name 변경
  name: "ArticlePage",
  components: {SideBar, NavigationBar, MdEditor, Comment},
  data() {
    return {
      article: {},
      comment_list: [],
      exist: false
    }
  },
  setup: () => {
    console.log("article setup")
    const store = useStore()
    return {
      user: computed(() => store.state.user),
      role: computed(() => store.state.role),
      idToken: computed(() => store.state.idToken),
      uid: computed(() => store.state.uid),
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
      if (result !== null && result.status === 200) {
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
      if (result !== null && result.status === 200) {
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
    },
    numberWithCommas(x) {
      return String(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    async articleDelete() {
      const role = this.role
      const uid = this.uid
      const article = this.article
      const post_pk = this.post_pk
      if (uid === article.user_user_pk.user_pk || role >= 100) {
        try {
          const response = await this.$axios.delete(
            "http://127.0.0.1:8000/hub/board/post/" + post_pk,
            {
              timeout: 5000
            },
          )
          if (response.status === 204) {
            console.log(post_pk + ' deleted')
            this.$router.back(-1)
          } else {
            alert("글 삭제 오류 발생")
          }
        } catch (e) {
          console.error(e.response.data)
          alert("서버 통신 오류")
          return
        }
      } else {
        alert("삭제 권한 없음")
      }
    }
  }
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/post-main.css";
</style>
