<template>
  <div class="board-item-type1-root">
    <div class="board-item-type1-up">
      <div class="board-item-type1-section-left">
        <div class="board-item-type1-section-title">{{ title }}</div>
        <div class="board-item-type1-section-content">{{ content }}</div>
        <div class="board-item-type1-section-information">
          <div class="board-item-type1-section-author">{{ author }}</div>
          <div class="board-item-type1-section-border"></div>
          <div class="board-item-type1-section-writetime">{{ getWriteTime }}</div>
        </div>
      </div>
      <div class="board-item-type1-section-right">
        <div class="board-item-type1-section-like">
          <span class="material-icons-round board-item-type1-section-icon icon-pink">thumb_up</span>
          <div class="board-item-type1-section-count">{{ likeCount }}</div>
        </div>
        <div class="board-item-type1-section-like">
          <span class="material-icons-round board-item-type1-section-icon icon-blue">chat_bubble</span>
          <div class="board-item-type1-section-count">{{ commentCount }}</div>
        </div>
      </div>
    </div>
    <div class="section-board-content-divider"></div>
  </div>
</template>

<script>
export default {
  name: "BoardItemType1",
  props: {
    title: {
      default: 'Title',
      type: String
    },
    content: {
      default: 'Content',
      type: String
    },
    author: {
      default: 'Author',
      type: String
    },
    writeTime: {
      default: () => {return new Date()},
      type: Date
    },
    likeCount: {
      default: 0,
      type: Number
    },
    commentCount: {
      default: 0,
      type: Number
    },
  },
  computed: {
    getWriteTime() {
      let now = new Date();
      let diff = now - this.writeTime

      diff /= 60000
      if (diff < 1) {
        return '방금 전'
      }

      if (diff < 60) {
        return Math.floor(diff) + '분 전'
      }

      diff /= 60
      if (diff < 24) {
        return Math.floor(diff) + '시간 전'
      }

      diff /= 24
      // if (diff < 24) {
      //   return Math.floor(diff) + '일 전'
      // }

      return Math.floor(diff) + '일 전'
    }
  }
}
</script>

<style scoped>
  @import "../../css/item-type1.css";
</style>