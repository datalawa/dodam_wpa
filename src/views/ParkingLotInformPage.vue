<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <ParkingLotB1View></ParkingLotB1View>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import router from "@/routers/router";
import ParkingLotB1View from "@/views/datalawa/ParkingLotB1View";
export default {
  name: "ParkingLotInformPage",
  components: {ParkingLotB1View, SideBar, NavigationBar},
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
