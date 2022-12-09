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

// const evtSource = new EventSource("/api/v1/parking/1f");
// evtSource.onmessage = function(event) {
//   console.log("event")
//   console.log(event)
// }

let sseClient;

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
    if (this.layer === '') {
      alert('error')
      router.go(-1)
    }
    console.log(this.layer)
    this.$axios.get(
      "/api/v1/parking/1f", {
        timeout: 5000,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      },
    )
      .then(function (response) {
        // 성공 핸들링
        console.log(response);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .then(function () {
        // 항상 실행되는 영역
      });
  },
  mounted() {
    sseClient = this.$sse.create({
      url: '/api/v1/parking/1f',
      format: 'plain',
      // withCredentials: true,
      // polyfill: true,
    });

    // Handle messages without a specific event
    sseClient.on('message', this.handleMessage);

    sseClient.connect()
      .then(sse => {
        console.log('We\'re connected!');
        console.log(sse)
        setTimeout(() => {
          sseClient.off('message', this.handleMessage);
          console.log('Stopped listening to event-less messages!');
        }, 7000);
      })
      .catch((err) => {
        console.error('Failed to connect to server', err);
      });
  },
  methods: {
    handleMessage(message, lastEventId) {
      console.warn('Received a message w/o an event!', message, lastEventId);
    },
  },
  beforeDestroy() {
    sseClient.disconnect();
  },
}
</script>

<style scoped>
</style>
