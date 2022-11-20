<template>
  <div id="sidebar-root">

  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>
  #sidebar-root {
    width: 190px;
    height: 100%;
    background: yellow;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 0px 20px 23px;
    gap: 32px;

    border-right: 0.25px solid #393939;
    flex: none;
    order: 1;
    align-self: stretch;
  }
</style>