<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <ParkingLotData  v-if="layer === 'B1' && parkB1Data.length > 0" :total-b1seat="parkB1Data.length" :statusData="parkB1Data"
                       :B1seat="getUsingCount(parkB1Data)" :F1seat="getUsingCount(parkF1Data)"
                       :floor="'B1'" :total-f1seat="parkF1Data.length" />
      <ParkingLotData v-else-if="layer === 'F1' && parkF1Data.length > 0" :total-b1seat="parkB1Data.length" :statusData="parkF1Data"
                      :B1seat="getUsingCount(parkB1Data)" :F1seat="getUsingCount(parkF1Data)"
                      :floor="'F1'"  :total-f1seat="parkF1Data.length" />
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import router from "@/routers/router";
import ParkingLotB1View from "@/views/datalawa/ParkingLotB1View";
import ParkingLotView from "@/views/datalawa/ParkingLotView";
import ParkingLotData from "@/components/ParkingLotData";
import {useStore} from "vuex";
import {computed} from "vue";

let sse;

export default {
  name: "ParkingLotInformPage",
  components: {ParkingLotData, ParkingLotView, ParkingLotB1View, SideBar, NavigationBar},
  props: {
    layer: {
      default: '',
      type: String
    }
  },
  setup() {
    const store = useStore()

    return {
      parkF1Data: computed(() => store.state.parkingB1Data),
      parkB1Data: computed(() => store.state.parking1FData),
    }
  },
  created() {
    if (this.layer === '') {
      alert('error')
      router.go(-1)
    }
    console.log(this.layer)
  },
  mounted() {
    sse = this.$sse.create({
      url: 'https://api.springnote.blog/api/v1/parking',
      format: 'plain',
      // withCredentials: true,
      // polyfill: true,
    });

    // Handle messages without a specific event
    sse.on('message', this.handleMessage);

    sse.connect()
      .then(sse => {
        console.log('We\'re connected!');
        console.log(sse)
        // setTimeout(() => {
        //   sseF1.off('message', this.handleMessage);
        //   console.log('Stopped listening to event-less messages!');
        // }, 100000);
      })
      .catch((err) => {
        console.error('Failed to connect to server', err);
      });
  },
  methods: {
    handleMessage(message, lastEventId) {
      // console.log('Received a message w/o an event!', message, lastEventId);
      console.log(message)
      const parkData = JSON.parse(message);
      const parkF1Data = parkData.f1
      const parkB1Data = parkData.b1
      console.log('Received a message w/o an event!', parkF1Data, lastEventId);
      this.$store.commit("setParking1FData", parkF1Data)
      this.$store.commit("setParkingB1Data", parkB1Data)
    },
    getUsingCount(data) {
      let count = 0
      for(let item of data) {
        if (item.status) count++
      }
      return count
    }
  },
  beforeDestroy() {
    sse.disconnect();
  },
}
</script>

<style scoped>
</style>
