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
