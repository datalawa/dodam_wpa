<template>
  <h1>{{ board }}</h1>
</template>

<script>
export default {
  name: "WritePage",
  props: {
    board: {
      type: String
    }
  },
  created() {
    console.log(this.board)
  }
}
</script>

<style scoped>

</style>