<template>
  <router-link v-bind:to="url" custom v-slot="{ navigate }">
    <div class="sidebar-item-root" @click="navigate" @mouseover="doMouseOver">
      <span class="material-icons-outlined sidebar-item-icon">{{ image }}</span>
      <div class="sidebar-item-text">{{ title }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    title: String,
    image: String,
    url: String
  },
  methods: {
    doMouseOver() {
      alert('over')
    }
  }
}
</script>

<style>
  .sidebar-item-root {
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 10px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .sidebar-item-icon {
    width: 18px;
    height: 18px;
    font-size: 18px;
  }

  .sidebar-item-text {
    font-weight: 700;
    font-size: 14px;
    height: 16px;
    padding-top: 2px;

    color: #393939;
  }
</style>