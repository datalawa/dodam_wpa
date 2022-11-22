<template>
  <div class="sidebar-index-root">
    <div class="sidebar-index-title">{{ indexTitle }}</div>
    <div class="sidebar-index-list-items">
      <div v-for="data in itemsData.indexItems" v-bind:key="data" class="sidebar-index-items">
        <SideBarItem :title="data.title" :image="data.image" :url="data.url"></SideBarItem>
      </div>
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
