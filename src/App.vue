<template>
  <router-view/>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup: () => {
    console.log("article setup")
    const store = useStore()
    return {
      user: computed(() => store.state.user),
      role: computed(() => store.state.role),
      idToken: computed(() => store.state.idToken),
      uid: computed(() => store.state.uid),
      authIsReady: computed(() => store.state.authIsReady),
    }
  },
}
</script>

<style>
  @import "./css/root.css";
  @import url(https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css);
</style>
