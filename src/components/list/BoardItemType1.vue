<template>
  <div class="board-item-type1-root">
    <div class="board-item-type1-section-left">
      <div class="board-item-type1-section-title">Title</div>
      <div class="board-item-type1-section-content">content</div>
      <div class="board-item-type1-section-information">
        <div class="board-item-type1-section-author">author</div>
        <div class="board-item-type1-section-border"></div>
        <div class="board-item-type1-section-writetime">12분전</div>
      </div>
    </div>
    <div class="board-item-type1-section-right">
      <div class="board-item-type1-section-like">
        <span class="material-icons-round board-item-type1-section-icon icon-pink">thumb_up</span>
        <div class="board-item-type1-section-count">128</div>
      </div>
      <div class="board-item-type1-section-like">
        <span class="material-icons-round board-item-type1-section-icon icon-blue">chat_bubble</span>
        <div class="board-item-type1-section-count">128</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardItemType1"
}
</script>

<style scoped>
  @import "../../css/item-type1.css";
</style>