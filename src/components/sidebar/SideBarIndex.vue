<template>
  <div class="sidebar-index-root">
    <div class="sidebar-index-title">{{ indexTitle }}</div>
    <div class="sidebar-index-list-items">
      <SideBarItem v-for="data in itemsData.indexItems"
                   v-bind:key="data" v-bind:title="data.title" v-bind:image="data.image"
                   class="sidebar-index-items"></SideBarItem>
    </div>
  </div>
</template>

<script>
import SideBarItem from "@/components/sidebar/SideBarItem";
export default {
  name: "SideBarIndex",
  components: {SideBarItem},
  props: {
    indexTitle: String,
    itemsData: Object
  }
}
</script>

<style>
  .sidebar-index-root {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;

    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }

  .sidebar-index-title {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #393939;

    flex: none;
    flex-grow: 0;
  }

  .sidebar-index-list-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 4px;

    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }

  .sidebar-index-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    gap: 10px;

    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
</style>