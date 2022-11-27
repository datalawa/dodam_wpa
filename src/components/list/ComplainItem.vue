<template>
  <div class="board-item-complain-root">
    <div class="board-item-complain-up">
      <div class="board-item-complain-head">민원</div>
      <div class="board-item-complain-title">
        {fjosofjosofjosofjosofjosofjosofjosofjosofjososofjosofjofjosofjofjosofjosofjosjosofjosjosofjosjosofjosjosofjosjosofjosofjosofjosofjosofjoso</div>
      <div class="board-item-complain-author">{{ author }}</div>
      <div class="board-item-complain-writetime">{{ writeTime }}</div>
    </div>
    <div class="section-board-content-divider"></div>
  </div>
</template>

<script>
export default {
  name: "ComplainItem",
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
      default: () => {return (new Date()).toISOString().substring(0, 10)},
      type: Date
    },
  },
}
</script>

<style>
  @import "../../css/item-complain.css";
</style>