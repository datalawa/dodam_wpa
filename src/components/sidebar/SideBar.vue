<template>
  <div id="sidebar-root">
    <SideBarItem title="대시보드" image="dashboard"></SideBarItem>
    <SideBarIndex index-title="게시판" v-bind:items-data="indexData[0]"></SideBarIndex>
  </div>
</template>

<script>
import SideBarItem from "@/components/sidebar/SideBarItem";
import SideBarIndex from "@/components/sidebar/SideBarIndex";
export default {
  name: "SideBar",
  components: {SideBarIndex, SideBarItem},
  data() {
    return {
      indexData: [
        {
          indexTitle: 'title',
          indexItems: [
            {title: '공지사항', image: 'feedback'},
            {title: '자유게시판', image: 'feedback'},
            {title: '설문조사', image: 'feedback'},
            {title: '민원/QnA', image: 'feedback'},
          ]
        },
        {}
      ]
    }
  }
}
</script>

<style>
  #sidebar-root {
    width: 190px;
    height: auto;

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

  SideBarItem {
    width: 100%;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
</style>