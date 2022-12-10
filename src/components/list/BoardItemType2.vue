<template>
  <div class="board-item-type2-root" @click="moveToPost">
    <div class="board-item-type2-up">
      <div class="board-item-type2-title">{{ title }}</div>
      <div class="board-item-type2-author">{{ author }}</div>
      <div class="board-item-type2-writetime">{{ writeTime }}</div>
    </div>
    <div class="section-board-content-divider"></div>
  </div>
</template>

<script>
import router from "@/routers/router";

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

<style scoped>
  @import "../../css/item-type2.css";
</style>
