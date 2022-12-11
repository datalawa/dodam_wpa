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
      <div class="section-text-form-root">
        <div class="section-text-selector-root">
          <v-select
            v-if="role >= 100"
              v-model="selectedBoard"
              class="section-text-selector-board"
              label="게시판" density="comfortable"
              :items="boardListAdmin"></v-select>
          <v-select
            v-else
              v-model="selectedBoard"
              class="section-text-selector-board"
              label="게시판" density="comfortable"
              :items="boardList"></v-select>
          <v-select
            v-model="selectedHead"
            :disabled="selectedBoard !== '민원/QnA'"
              class="section-text-selector-head"
              label="머리말" density="comfortable"
              :items="['민원', 'QnA']"></v-select>
        </div>
        <v-text-field v-model="titleInput" label="제목" variant="outlined" density="comfortable" placeholder="제목입력" counter="45"></v-text-field>
        <md-editor class="section-text-input" v-model="contentInput" language="en-US" :toolbars="toolbars"/>
        <div class="section-text-selector-root">
          <v-btn class="section-write-button" variant="outlined" color="red" @click="cancle">취소</v-btn>
          <v-btn class="section-write-button" variant="outlined" color="blue" @click="upload">등록</v-btn>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar";
import NavigationBar from "@/components/NavigationBar";
import {computed} from "vue";
import {useStore} from "vuex";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

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
  '=',
  'pageFullscreen',
  'fullscreen',
  'preview',
  'catalog'
]

export default {
  name: "WritePage",
  components: {SideBar, NavigationBar, MdEditor},
  data: () => {
    return {
      board: "",
      selectedBoard: "자유게시판",
      selectedHead: "QnA",
      titleInput: "",
      contentInput: "",
    }
  },
  setup: () => {
    const store = useStore()
    const boardListAdmin = ['공지사항', '자유게시판', '민원/QnA']
    const boardList = ['자유게시판', '민원/QnA']
    const headList = ['민원', 'QnA']
    return {
      user: computed(() => store.state.user),
      role: computed(() => store.state.role),
      idToken: computed(() => store.state.idToken),
      uid: computed(() => store.state.uid),
      boardListAdmin,
      boardList,
      headList
    }
  },
  created() {
    const type = this.$route.query.board;
    if (type === undefined) {
      alert("type 없음");
      this.$router.go(-1)
    } else {
      console.log(type);
      this.board = type;
    }
  },
  beforeMount() {
    switch (this.board) {
      case "complain":
        this.selectedBoard = "민원/QnA"
        break
      case "notice":
        this.selectedBoard = "공지사항"
        break
      case "free":
        this.selectedBoard = "자유게시판"
        break
    }
  },
  async mounted() {

  },
  methods: {
    cancle() {
      this.$router.back(-1)
    },
    async upload() {
      const role = this.role
      const title = this.titleInput
      const selectedBoard = this.selectedBoard
      const selectedHead = this.selectedHead
      const contentInput = this.contentInput
      const uid = this.uid
      console.log('role', role)
      if (role === undefined || uid === '') {
        alert("권한 undefined")
        return
      }

      if (this.selectedBoard === "공지사항" && role < 100) {
        alert("권한 거부")
        return
      }

      if (title === '' || contentInput === '') {
        alert('제목/내용을 작성')
        return
      }

      const articleData = {
        user_user_pk: uid
      }
      console.log("post data", articleData)
    }
  }
}
</script>

<style scoped>
@import "../css/wrtie-main.css";
</style>
