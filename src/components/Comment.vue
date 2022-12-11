<template>
  <div class="comment-root" :style="{paddingLeft: depth * 40 + 'px'}">
    <div class="comment-top">
      <div class="comment-profile"></div>
      <div class="comment-right">
        <div class="comment-writer">{{ writerName }} 님</div>
        <div class="comment-content">{{ content }}</div>
        <div class="comment-info">
          <div class="comment-writetime">{{ wirteTime }}</div>
          <div class="comment-reply">답글쓰기</div>
          <div class="comment-delete">삭제</div>
        </div>
      </div>
    </div>
    <hr class="comment-hr">
  </div>
  <Comment v-for="item in reply" :key="item" :reply="item.reply" :depth="depth + 1"
           :writer-name="item.user_user_pk.user_nm" :content="item.comment_text"
           :wirte-time="item.comment_write_time.substring(0, 10) + ' ' + item.comment_write_time.substring(11, 19)"></Comment>
</template>

<script>
export default {
  name: "Comment",
  props: {
    depth: 0,
    writerName: "writer",
    wirteTime: "2020.11.11 13:23:32",
    content: "test",
    deleted: false,
    reply: []
  },
  mounted() {
    console.log(this.depth)
  }
}
</script>

<style>
@import "../css/comment-main.css";
</style>
