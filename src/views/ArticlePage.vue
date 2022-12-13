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
              <div class="post-info-item" @click="setLike">
                <span class="material-icons-round icon-pink-f">favorite</span>
                <div class="post-info-text">좋아요 {{ numberWithCommas(article.like_count) }}개</div>
              </div>
            </div>
            <Comment v-for="item in comment_list" :key="item" :post-pk="item.post_post_pk"
                     :reply="item.reply" :depth="0" :comment-pk="item.comment_pk"
                    :writer-name="item.user_user_pk.user_nm" :content="item.comment_text" :isReply="true" :writer-u-i-d="item.user_user_pk.user_pk"
                    :wirte-time="item.comment_write_time.substring(0, 10) + ' ' + item.comment_write_time.substring(11, 19)"></Comment>
            <CommentWrite></CommentWrite>
          </div>
          <div v-else-if="article.board_board_pk === 3 && article.post_refer !== null && Object.keys(articleAnswer).length > 0"
               class="post-right">
            <div class="post-right-top-answer">
              <div class="post-top-title">{{ articleAnswer.post_title }}</div>
              <div class="post-top-sub">
                <div class="post-top-sub-author">{{ articleAnswer.user_user_pk.user_nm }}</div>
                <hr class="updown">
                <div class="post-top-sub-author">{{ articleAnswer.post_write_time.substring(0, 10) }}</div>
                <hr v-if="uid === articleAnswer.user_user_pk.user_pk || role >= 100" class="updown">
                <span v-if="uid === articleAnswer.user_user_pk.user_pk || role >= 100"
                      class="material-icons-round" @click="articleDelete">delete</span>
              </div>
            </div>
            <md-editor class="post-content" v-model="articleAnswer.post_text" language="en-US" :previewOnly="true"/>
          </div>
          <div v-else-if="writeMode" class="writemode-page">
            <v-text-field v-model="titleInputAnswer" label="제목" variant="outlined" density="comfortable" placeholder="제목입력" counter="45"></v-text-field>
            <md-editor class="section-text-input" v-model="contentInputAnswer" language="en-US" :toolbars="toolbars"/>
            <div class="section-text-selector-root">
              <v-btn class="section-write-button" variant="outlined" color="red" @click="writeMode = false">취소</v-btn>
              <v-btn class="section-write-button" variant="outlined" color="blue" @click="uploadAnswer">등록</v-btn>
            </div>
          </div>
          <div v-else>
            답변 대기중입니다.
          </div>
        </div>
      </div>
    </div>
    <div v-if="role >= 100 && !writeMode && article.post_refer === null" class="main-floating-write-button" @click="writeMode = true">
      <v-icon icon="mdi-pencil"></v-icon>
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
import CommentWrite from "@/components/CommentWrite";


export default {
  //TODO: name 변경
  name: "ArticlePage",
  components: {CommentWrite, SideBar, NavigationBar, MdEditor, Comment},
  data() {
    return {
      article: {},
      articleAnswer: {},
      comment_list: [],
      titleInputAnswer: "",
      contentInputAnswer: "",
      exist: false,
      writeMode: false,
      answerPk: null
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
      authIsReady: computed(() => store.state.authIsReady),
    }
  },
  props: {
    post_pk: 0
  },
  computed: {
    async getArticles() {
      console.log('getArticle')
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
        if (result.data.post_refer !== null) {
          this.answerPk = result.data.post_refer.post_pk
          this.getAnswerArticles
        }
      } else {
        this.article = {}
      }
    },
    async getAnswerArticles() {
      if (this.answerPk === null) {
        return
      }
      console.log('answer pk', this.answerPk)
      const result = await this.$axios.get(
        "https://api.springnote.blog/hub/board/post/" + this.answerPk, {
          timeout: 5000
        },
      )
      // console.log(result);
      if (result !== null && result.status === 200) {
        this.articleAnswer = result.data
      } else {
        this.articleAnswer = {}
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
    if (this.authIsReady) {
      this.getArticles
      this.getComment
    }
  },
  methods: {
    async setLike() {
      const uid = this.uid
      const post_pk = this.post_pk
      const idToken = this.idToken

      if (uid !== '' && post_pk > 0 && idToken !== '') {
        try {
          const response = await this.$axios.post(
            "https://api.springnote.blog/hub/board/post/like/",
            {
              post_post_pk: post_pk,
              user_user_pk: uid,
              like_time: null
            },
            {
              timeout: 5000,
              headers: {
                Authorization: "Bearer " + idToken
              },
            },
          )
          if (response.status === 201) {
            console.log('like', response)
            this.article.like_count += 1
          } else if (response.status === 204) {
            console.log('like cancel')
            this.article.like_count -= 1
          } else {
            alert("라이크 오류 발생")
          }
        } catch (e) {
          console.error(e.response.data)
          alert("서버 통신 오류")
          return
        }
      } else {
        alert("라이크 권한 없음")
      }
    },
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
            "https://api.springnote.blog/hub/board/post/" + post_pk,
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
    },
    async articleAnswerDelete() {
      const role = this.role
      const uid = this.uid
      const article = this.articleAnswer
      const post_pk = this.answerPk
      if (uid === article.user_user_pk.user_pk || role >= 100) {
        try {
          const response = await this.$axios.delete(
            "https://api.springnote.blog/hub/board/post/" + post_pk,
            {
              timeout: 5000
            },
          )
          if (response.status === 204) {
            console.log(post_pk + ' deleted')
            this.article.post_refer = null
            this.writeMode = false
            this.answerPk = null
            this.articleAnswer = {}
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
    },
    async uploadAnswer() {
      const role = this.role
      const title = this.titleInputAnswer
      const contentInput = this.contentInputAnswer
      const uid = this.uid
      const idToken = this.idToken
      console.log('role', role)
      if (role === undefined || uid === '' || idToken === '') {
        alert("권한 undefined")
        return
      }

      if (role < 100) {
        alert("권한 거부")
        return
      }

      if (title === '' || contentInput === '') {
        alert('제목/내용을 작성')
        return
      }

      const articleData = {
        user_user_pk: uid,
        post_text: contentInput,
        post_title: title,
        board_board_pk: 3,
        post_tag: 3,
        post_refer: null,
        post_write_time: null,
        post_update_time: null,
      }
      console.log("post data", articleData)
      try {
        const response = await this.$axios.post(
          "https://api.springnote.blog/hub/board/post/",
          articleData,
          {
            headers: {
              Authorization: "Bearer " + idToken
            },
            timeout: 5000
          },
        )
        if (response.status === 201) {
          const pk = response.data.post_pk
          console.log(pk)
          const responsePatch = await this.$axios.patch(
            "https://api.springnote.blog/hub/board/post/" + this.post_pk + "/",
            {
              post_refer: pk
            },
            {
              headers: {
                Authorization: "Bearer " + idToken
              },
              timeout: 5000
            },
          )

          if (responsePatch.status === 200) {
            this.answerPk = pk
            this.article.post_refer = pk
            this.writeMode = false
            this.getAnswerArticles
          } else {
            alert("글 생성중 오류 발생2")
          }
        } else {
          alert("글 생성중 오류 발생")
        }
      } catch (e) {
        console.error(e.response.data)
        alert("서버 통신 오류")
        return
      }
    }
  },
  watch: {
    authIsReady: function(val) {
      this.getArticles
      this.getComment
    }
  }
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/post-main.css";
</style>
