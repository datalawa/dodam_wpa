<template>
  <div class="board-item-type2-root">
    <div class="board-item-type2-up">
      <div class="board-item-type2-title">{{ title }}</div>
      <div class="board-item-type2-author">{{ author }}</div>
      <div class="board-item-type2-writetime">{{ writeTime }}</div>
    </div>
    <div class="section-board-content-divider"></div>
  </div>
</template>

<script>
export default {
  name: "BoardItemType2",
  props: {
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
  },

}
</script>

<style scoped>
  @import "../../css/item-type2.css";
</style>
