<template>
  <div class="comment-root" :style="{paddingLeft: depth * 40 + 'px'}">
    <div class="comment-top">
      <div class="comment-profile"></div>
      <div class="comment-right">
        <div class="comment-writer">{{ name }} 님</div>
        <textarea @focusout="isFocused = false" @focus="isFocused = true"
                  @keydown="resize" @onkeyup="resize" class="comment-write-area"></textarea>
        <div class="section-text-selector-root">
          <v-btn v-if="isReply" class="section-write-button" variant="outlined" @click="cancle" color="red" size="x-small">취소</v-btn>
          <v-btn class="section-write-button" variant="outlined" color="blue" @click="upload" size="x-small">등록</v-btn>
        </div>
      </div>
    </div>
    <hr class="comment-hr">
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "CommentWrite",
  props: {
    isReply: false,
    parentPk: -1,
    depth: 0,
    isFocused: false
  },
  data:() => {
    return {
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
      name: computed(() => store.state.name),
    }
  },
  methods: {
    resize(obj) {
      obj.target.style.height = "1px";
      obj.target.style.height = (12 + obj.target.scrollHeight)+"px";
    },
    upload() {
      console.log('comment upload')
    },
    cancle() {
      if (this.isReply) {
        console.log('ddddddfdf')
        this.$emit('cancelWrite', false)
      }
    }
  },
  mounted() {

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
}
/*.comment-write-area:focus {*/
/*  outline-width: 1px;*/
/*}*/
</style>
