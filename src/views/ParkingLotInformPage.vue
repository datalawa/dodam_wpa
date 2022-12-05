<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <ParkingLotB1View v-if="layer === 'B1'"></ParkingLotB1View>
      <ParkingLotView v-else-if="layer === 'F1'"></ParkingLotView>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import router from "@/routers/router";
import ParkingLotB1View from "@/views/datalawa/ParkingLotB1View";
import ParkingLotView from "@/views/datalawa/ParkingLotView";
export default {
  name: "ParkingLotInformPage",
  components: {ParkingLotView, ParkingLotB1View, SideBar, NavigationBar},
  props: {
    layer: {
      default: '',
      type: String
    }
  },
  created() {
    console.log(this.layer)
    if (this.layer === '') {
      alert('error')
      router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>
