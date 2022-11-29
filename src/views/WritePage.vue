<template>
  <h1>{{ board }}</h1>
  <vue-simplemde v-model="content" ref="markdownEditor" />
</template>

<script>
import VueSimplemde from 'vue-simplemde'

export default {
  name: "WritePage",
  props: {
    board: {
      type: String
    }
  },
  components: {
    VueSimplemde
  }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';
</style>