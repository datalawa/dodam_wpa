<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar :is-hidden="true"></SideBar>
    <div id="section-main-transparent"></div>
    <div id="section-main-content">
<!--      <div class="card background-shadow write-root">-->
<!--        <md-editor v-model="text" language="en-US" :toolbars="toolbars"/>-->
<!--      </div>-->
      <div class="section-board-top">
        <div class="section-board-title">글쓰기</div>
<!--        <div class="section-board-search-root background-shadow">-->
<!--          <input class="section-board-search-text" type="text" placeholder="글 검색"/>-->
<!--          <div class="section-board-search-border"></div>-->
<!--          <span class="material-icons-outlined section-board-search-image">search</span>-->
<!--        </div>-->
      </div>
      <div>
        <v-text-field label="제목" variant="outlined" placeholder="제목입력" counter="45"></v-text-field>
        <md-editor v-model="text" language="en-US" :toolbars="toolbars"/>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('');
const toolbars = [
  'bold',
  'underline',
  'italic',
  '-',
  'title',
  'strikeThrough',
  'sub',
  'sup',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'link',
  'image',
  'table',
  'katex',
  '-',
  'revoke',
  'next',
  'save',
  '=',
  'pageFullscreen',
  'fullscreen',
  'preview',
  'catalog'
]
</script>

<script>
import SideBar from "@/components/sidebar/SideBar";
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "WritePage",
  data: () => {
    return {
      board: "",
    }
  },
  components: {SideBar, NavigationBar},
  created() {
    const type = this.$route.query.board;
    if (type === undefined) {
      alert("type 없음");
      this.$router.go(-1)
    } else {
      console.log(type);
      this.board = type;
    }
  }
}
</script>

<style>
@import "../css/wrtie-main.css";
</style>