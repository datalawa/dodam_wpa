<template>
    <div class="Largebox background-shadow card">
      <div class="parking-top">
        <div class="parking-title">주차장 자리 정보</div>
        <div class="left-right-corner-floor">{{floor}}</div>
      </div>
      <div class="parking-remain">
        <div class="floorF1">F1 {{F1seat}}/40</div>
        <div class="floorB1">B1 {{B1seat}}/40</div>
      </div>
      <div class="parking-tile-top">
        <SeatBoxGroup1/>
        <SeatBoxGroup2/>
      </div>
      <div class="parking-middle-arrow">
        <svg class="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      </div>
      <div class="parking-tile-top">
        <SeatBoxGroup3/>
        <svg class="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        <SeatBoxGroup4/>
      </div>
      <div class="parking-bottom">
        <div class="parking-button-another">
          <button @click="onLayerButtonCLicked" class="btn background-shadow" >B1</button>
          <button @click="onLayerButtonCLicked" class="btn background-shadow" >F1</button>
        </div>
        <SeatInf />
      </div>
    </div>
</template>
<script>
import SeatBoxGroup1 from "@/components/SeatBoxGroup1";
import SeatBoxGroup2 from "@/components/SeatBoxGroup2";
import SeatBoxGroup3 from "@/components/SeatBoxGroup3";
import SeatBoxGroup4 from "@/components/SeatBoxGroup4";
import SeatInf from "@/components/SeatInf";
import router from "@/routers/router";

export default {
    props:{
        B1seat:Number,
        F1seat:Number,
        floor: String
    },
    components: {SeatBoxGroup1,SeatBoxGroup2, SeatBoxGroup3, SeatBoxGroup4, SeatInf},
    data() {
    return {
        sampleData:''
        }
    },
    setup() {},
    created() {},
    unmounted() {},
    methods:{
      onLayerButtonCLicked(e) {
        switch (e.target.textContent) {
          case 'F1': {
            router.push({name: 'ParkingLotInform', params: { layer: 'F1' }})
            break
          }
          case 'B1': {
            router.push({name: 'ParkingLotInform', params: { layer: 'B1' }})
            break
          }
          default: {
            console.error('layer button error')
          }
        }
      }
    }
}
</script>
<style scoped>
@import "../assets/css/ParkingLot.css";

.svg1{
    width:50px;
    height: 90px;
  position: relative;
  left: 10%;
}
.svg2{
    width:45px;
    height: 100%;
  left: 50%;
  transform: translateX(-50%);
    position: absolute;
  align-items: end;
}
</style>
