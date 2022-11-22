<template>
  <div id="sidebar-root">
    <SideBarItem title="대시보드" image="dashboard" url="/"></SideBarItem>
    <SideBarIndex v-bind:index-title="indexData[0].indexTitle" v-bind:items-data="indexData[0]"></SideBarIndex>
    <SideBarIndex v-bind:index-title="indexData[1].indexTitle" v-bind:items-data="indexData[1]"></SideBarIndex>
    <SideBarIndex v-bind:index-title="indexData[2].indexTitle" v-bind:items-data="indexData[2]"></SideBarIndex>
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
          indexTitle: '게시판',
          indexItems: [
            {title: '공지사항', image: 'feedback', url: '/'},
            {title: '자유게시판', image: 'forum', url: '/free'},
            {title: '설문조사', image: 'inventory', url: '/survey'},
            {title: '민원/QnA', image: 'support_agent', url: '/complain'},
          ]
        },
        {
          indexTitle: '관리비',
          indexItems: [
            {title: '이번달 관리비', image: 'attach_money', url: '/'},
            {title: '납부기록', image: 'assessment', url: '/'},
          ]
        },
        {
          indexTitle: '주차',
          indexItems: [
            {title: '주차장 현황', image: 'local_parking', url: '/'},
            {title: '입출차 기록', image: 'schedule', url: '/'},
          ]
        }
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
    padding: 32px 23px 20px 23px;
    gap: 32px;

    border-right: 0.25px solid var(--secondary-text-color);
    flex: none;
    order: 1;
    align-self: stretch;
  }
</style>