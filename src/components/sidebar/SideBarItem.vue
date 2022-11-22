<template>
  <router-link v-bind:to="url" custom v-slot="{ navigate }">
    <div class="sidebar-item-root" :class="{ sidebar_item_active: checkSelected() }" @click="navigate">
      <div class="sidebar-item-list">
        <span class="material-icons-outlined sidebar-item-icon">{{ image }}</span>
        <div class="sidebar-item-text">{{ title }}</div>
      </div>
      <div class="sidebar-item-selected" :class="{ sidebar_item_active: checkSelected() }"></div>
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
  data: () => {
    return {
      checked: false
    }
  },
  methods: {
    checkSelected() {
      let nowPath = Object.values(this.$router.currentRoute)[3].path;
      return nowPath === this.url;
    }
  }
}
</script>

<style>

  .sidebar_item_active {
    color: var(--point-color) !important;
    visibility: visible !important;
  }

  .sidebar-item-root {
    cursor: pointer;
    gap: 20px;
    height: 28px;

    display: flex;
    flex-direction: row;
    align-items: center;

    flex: none;

    width: 100%;
    box-sizing: border-box;

    color: var(--secondary-text-color);
  }

  .sidebar-item-list {
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0px 5px 5px;
    gap: 10px;

    flex: 1;

    box-sizing: border-box;

    border-radius: 5px;
  }

  .sidebar-item-list:hover {
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
  }

  .sidebar-item-selected {
    visibility: hidden;
    height: 100%;
    width: 3px;
    background: var(--point-color);
    box-sizing: border-box;
    border-radius: 3px 0 0 3px;

    display: flex;
    flex: none;
  }
</style>