<template>
    <div class ='content-box'>
      <br>
      <h3>본인 차량 조회</h3>
      <br>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm288 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
      <br>
      <br>
      <span>입주민 차량 여부</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{visit}}
      <div style='background:black; height:1px; width:510px; margin:auto'></div>
      <br>
      <br>
      <span>차량 번호</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{carnum}}
      <div style='background:black; height:0.3px; width:510px; margin:auto'></div>
      <br>
      <br>
      <span>차종</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{kind}}
      <div style='background:black; height:1px; width:510px; margin:auto'></div>
      <br>
      <br>
      <span>입출차 시간</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{indate}}  {{intime}} ~ {{outdate}} {{outtime}}
      <div style='background:black; height:1px; width:510px; margin:auto'></div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
        <!-- <nav>
        <router-link to="/datalawa/inoutcard" v-slot="{ navigate }"><button style="border:15px; outline: 30px; border-color: blueviolet;" @click="navigate"
        role="link">목록</button></router-link>
        </nav> -->
        <v-btn size="x-small" href="/datalawa/inoutcard">
        목록
        </v-btn>
    </div>
</template>
<script>
export default {
    props:{
    visit: String,
    carnum: String,
    kind: String,
    indate:String,
    outdate:String,
    intime: String,
    outtime: String
  },
    components: {},
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
.content-box{
    /* position: relative; */
    margin:auto;
    width: 537px;
    height: 599px;
    /* left: 596px;
    top: 108px; */
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    border-radius: 18px;
}

svg {
width   : 4%;
height  : 4%;
fill    : #000000;
}

span {
    font-weight: bold;
    /* text-align: left;
    padding-left : 20px; */
}
</style>
