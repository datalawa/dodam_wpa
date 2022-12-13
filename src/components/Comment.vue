<template>
  <div class="comment-root" :style="{paddingLeft: depth * 40 + 'px'}">
    <div class="comment-top">
      <div class="comment-profile"></div>
      <div class="comment-right">
        <div class="comment-writer">{{ writerName }} 님</div>
        <div class="comment-content">{{ content }}</div>
        <div class="comment-info">
          <div class="comment-writetime">{{ wirteTime }}</div>
          <div v-if="depth < 5" class="comment-reply" @cancelWrite="changeShow" @click="isWrite = true">답글쓰기</div>
          <div v-if="writerUID === uid || role >= 100" class="comment-delete">삭제</div>
        </div>
      </div>
    </div>
    <hr class="comment-hr">
  </div>
  <div v-if="isWrite" class="comment-root" :style="{paddingLeft: depth * 40 + 'px'}">
    <div class="comment-top">
      <div class="comment-profile"></div>
      <div class="comment-right">
        <div class="comment-writer">{{ name }} 님</div>
        <textarea @focus="isWrite = true" v-model="writeContent"
                  @keydown="resize" @onkeyup="resize" class="comment-write-area"></textarea>
        <div class="section-text-selector-root">
          <v-btn v-if="isReply" class="section-write-button" variant="outlined" @click="isWrite = false" color="red" size="x-small">취소</v-btn>
          <v-btn class="section-write-button" variant="outlined" color="blue" @click="upload" size="x-small">등록</v-btn>
        </div>
      </div>
    </div>
    <hr class="comment-hr">
  </div>
  <Comment v-for="item in reply" :key="item" :reply="item.reply" :post-pk="item.post_post_pk"
           :depth="depth + 1" :comment-pk="item.comment_pk"
           :writer-name="item.user_user_pk.user_nm" :content="item.comment_text" :is-reply="true" :writer-u-i-d="item.user_user_pk.user_pk"
           :wirte-time="item.comment_write_time.substring(0, 10) + ' ' + item.comment_write_time.substring(11, 19)"></Comment>
</template>

<script>
import CommentWrite from "@/components/CommentWrite";
import {useStore} from "vuex";
import {computed} from "vue";
export default {
  name: "Comment",
  components: {CommentWrite},
  props: {
    depth: 0,
    writerName: "writer",
    wirteTime: "2020.11.11 13:23:32",
    content: "test",
    deleted: false,
    reply: [],
    isReply: false,
    commentPk: -1,
    writerUID: '',
    postPk: -1
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
      name: computed(() => store.state.name),
    }
  },
  data: () => {
    return {
      isWrite: false,
      parentPk: -1,
      writeContent: ''
    }
  },
  methods: {
    resize(obj) {
      obj.target.style.height = "1px";
      obj.target.style.height = (12 + obj.target.scrollHeight)+"px";
    },
    async upload() {
      const content = this.writeContent
      if (content === '') {
        alert('내용입력')
        return
      }

      const idToken = this.idToken
      const uid = this.uid
      const commentPk = this.commentPk
      console.log(commentPk, uid)

      try {
        const response = await this.$axios.post(
          "https://api.springnote.blog/hub/board/post/comment/",
          {
            comment_parent_comment_comment_pk: commentPk,
            status: 1,
            user_user_pk: uid,
            post_post_pk: this.postPk,
            comment_text: content
          },
          {
            headers: {
              Authorization: "Bearer " + idToken
            },
            timeout: 5000
          },
        )
        if (response.status === 201) {
          console.log('comment created', response)
          window.location.reload(true);
          } else {
            alert("글 생성중 오류 발생2")
          }
      } catch (e) {
        console.error(e.response.data)
        alert("서버 통신 오류")
        return
      }
    },
  },
  mounted() {
    console.log(this.depth)
  }
}
</script>

<style>
@import "../css/comment-main.css";
.comment-write-area {
  width: 100%;
  outline-width: 1px;
  min-height: 50px;
  margin-bottom: 5px;
  font-size: 14px;
  border:solid 1px black;
  border-radius: 5px;
}
</style>
