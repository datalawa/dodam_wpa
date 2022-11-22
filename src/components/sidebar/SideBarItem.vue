<template>
  <router-link v-bind:to="url" custom v-slot="{ navigate }">
    <div class="sidebar-item-root" @click="navigate">
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
  }
}
</script>

<style>
  .sidebar-item-root {
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    gap: 10px;

    flex: none;
    order: 0;
    flex-grow: 0;

    width: 100%;

    border-radius: 5px;
  }

  .sidebar-item-root:hover {
    background: var(--sidebar-hovering-color);
  }

  .sidebar-item-icon {
    width: 18px;
    height: 18px;
    font-size: 18px;
  }

  .sidebar-item-text {
    font-weight: 700;
    font-size: 14px;
    height: 18px;
    /*padding-top: 2px;*/

    color: var(--secondary-text-color);
  }
</style>