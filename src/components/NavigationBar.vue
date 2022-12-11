<template>
  <nav class="navbar-top">
    <div class="navbar-right">
      <span class="material-icons-round navbar-button-menu" @click="onOpenButtonClicked">menu</span>
      <div class="navbar-title">도담도담</div>
    </div>
    <v-badge v-if="authIsReady && user !== null" :content="63" dot color="#F25672">
      <v-icon icon="mdi-bell" size="x-small" color="#C7C7C7"></v-icon>
    </v-badge>
<!--    <div class="navbar-alert">-->
<!--      <v-badge :content="63">-->
<!--        <v-icon icon="mdi-bell" size="x-small"></v-icon>-->
<!--      </v-badge>-->
<!--&lt;!&ndash;      <span class="material-icons-outlined icon-color-button-gray">notifications</span>&ndash;&gt;-->
<!--    </div>-->
    <div v-if="authIsReady && user !== null"  class="navbar-user-left">
<!--      <div class="navbar-user-name">userName</div>-->
      <v-btn class="navbar-user-name" variant="text" size="small" @click="logoutAction">
        {{ name }}
      </v-btn>
<!--      <div class="navbar-user-profile"></div>-->
    </div>
    <div v-else class="navbar-user-left">
      <v-btn variant="text" size="small" @click="onLoginButtonClicked">
        로그인
      </v-btn>
    </div>
  </nav>
</template>

<script>
import router from "@/routers/router";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name: "NavigationBar",
  setup: () => {
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const logoutAction = async () => {
      try {
        await store.dispatch('logOut')
        router.push('/login')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return {
      logoutAction,
      error,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
      name: computed(() => store.state.name),
    }
  },
  methods: {
    onOpenButtonClicked() {
      let sideBar = document.getElementById('sidebar-root')
      let mainContentSection = document.getElementById('section-main')
      let blackSection = document.getElementById('section-main-transparent')
      if (sideBar.className === 'open') {
        sideBar.className = '';
        mainContentSection.className = ''
        blackSection.className = ''
      } else {
        sideBar.className = 'open';
        mainContentSection.className = 'open'
        blackSection.className = 'open'
      }
    },
    onLoginButtonClicked() {
      router.push({path: "/login"})
    }
  }
}
</script>

<style scoped>
@import "../css/navbar-main.css";
</style>
