<template>
  <div id="sidebar-root" :class="{'open': !isHidden}">
    <SideBarItem title="대시보드" image="dashboard" url="/dash"></SideBarItem>
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
  props: {
    isHidden: Boolean
  },
  data() {
    return {
      indexData: [
        {
          indexTitle: '게시판',
          indexItems: [
            {title: '공지사항', image: 'feedback', url: '/notice'},
            {title: '자유게시판', image: 'forum', url: '/free'},
            // {title: '설문조사', image: 'inventory', url: '/survey'},
            {title: '민원/QnA', image: 'support_agent', url: '/complain'},
          ]
        },
        {
          indexTitle: '관리비',
          indexItems: [
            {title: '이번달 관리비', image: 'attach_money', url: '/fee'},
            {title: '납부기록', image: 'assessment', url: '/paylist'},
          ]
        },
        {
          indexTitle: '주차',
          indexItems: [
            {title: '주차장 현황', image: 'local_parking', url: '/parkinglot/B1'},
            {title: '입출차 기록', image: 'schedule', url: '/inout'},
          ]
        }
      ]
    }
  }
}
</script>

<style>
  @import "../../css/sidebar-main.css";
</style>
