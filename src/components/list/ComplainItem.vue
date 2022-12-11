<template>
  <div class="board-item-complain-root" @click="moveToPost">
    <div class="board-item-complain-up">
      <div v-if="isComplain" class="board-item-complain-head head-red">민원</div>
      <div v-else class="board-item-complain-head head-blue">QnA</div>
      <div class="board-item-complain-title">{{ title }}</div>
      <div class="board-item-complain-author">{{ author }}</div>
      <div class="board-item-complain-writetime">{{ writeTime }}</div>
      <div class="board-item-complain-finish">
        <span v-if="finish" class="material-icons-round orange">hourglass_empty</span>
        <span v-else class="material-icons-round green">check_circle_outline</span>
      </div>
    </div>
    <div class="section-board-content-divider"></div>
  </div>
</template>

<script>
import router from "@/routers/router";

export default {
  name: "ComplainItem",
  props: {
    isComplain: {
      default: true,
      type: Boolean
    },
    title: {
      default: 'Title',
      type: String
    },
    author: {
      default: 'Author',
      type: String
    },
    writeTime: {
      default: () => {return new Date().toISOString().substring(0, 10)},
      type: String
    },
    finish: {
      default: false,
      type: Boolean
    },
    pk: {
      default: 0,
      type: Number
    }
  },
  methods: {
    moveToPost() {
      router.push({ name: 'post', params: { post_pk: this.pk }})
    }
  }
}
</script>

<style>
  @import "../../css/item-complain.css";
</style>
