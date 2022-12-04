<template>
    <div class="Largebox">
        <h4>주차장 자리 정보</h4>
        <div class="left-right-corner-floor">{{floor}}</div>
        <div class="floorF1">F1 {{F1seat}}/40</div>
        <!-- <div align="right" class="line"></div> -->
        <div class="floorB1">B1 {{B1seat}}/40</div>
        <div class="section-test"><SeatBoxGroup1/>&emsp;&emsp;&emsp;<SeatBoxGroup2/></div>
        <br>
        <br>
        <br>
        <br>
        <svg class="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      <div class="section-test">
        <SeatBoxGroup3/>
        <svg class="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        <SeatBoxGroup4/>
      </div>
        <br>
        <br>
        <br>
        <br>
        <button onclick="location.href='./parkinglotB1'" class="btn" >B1</button> <button onclick="location.href='./parkinglot'" class="btn" >F1</button>
        <SeatInf />
    </div>
</template>
<script>
import SeatBoxGroup1 from "@/components/SeatBoxGroup1";
import SeatBoxGroup2 from "@/components/SeatBoxGroup2";
import SeatBoxGroup3 from "@/components/SeatBoxGroup3";
import SeatBoxGroup4 from "@/components/SeatBoxGroup4";
import SeatInf from "@/components/SeatInf";

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
    methods:{}
}
</script>
<style scoped>
@import "../assets/css/ParkingLot.css";

.svg1{
    width:150px;
    height: 100px;
    display: flex;
    padding-left: 100px;
}
.svg2{
    width:45px;
    height: 100px;
    bottom: 10 0px;
    /* display: flex; */
    /* padding: center; */
}
.btn{
    border-radius: 50px;
    width: 37.39px;
    height: 41.69px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 13px;
    font-weight: 600;
    /* float: left; */
}

.section-test {
  position: relative;
  height: 115px;
}
</style>
