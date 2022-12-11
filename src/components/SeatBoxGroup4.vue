<template>
  <div class="container">
    <div class="group-top">
      <UsingSeat v-if="datas.length > 0" :number="31" :type="type2string(datas[0].type, datas[0].status)"/>
      <UsingSeat v-if="datas.length > 1" :number="32" :type="type2string(datas[1].type, datas[1].status)"/>
      <UsingSeat v-if="datas.length > 2" :number="33" :type="type2string(datas[2].type, datas[2].status)"/>
      <UsingSeat v-if="datas.length > 3" :number="34" :type="type2string(datas[3].type, datas[3].status)"/>
      <UsingSeat v-if="datas.length > 4" :number="35" :type="type2string(datas[4].type, datas[4].status)"/>
    </div>
    <div class="group-bottom">
      <UsingSeat v-if="datas.length > 5" :number="36" :type="type2string(datas[5].type, datas[5].status)"/>
      <UsingSeat v-if="datas.length > 6" :number="37" :type="type2string(datas[6].type, datas[6].status)"/>
      <UsingSeat v-if="datas.length > 7" :number="38" :type="type2string(datas[7].type, datas[7].status)"/>
      <UsingSeat v-if="datas.length > 8" :number="39" :type="type2string(datas[8].type, datas[8].status)"/>
      <UsingSeat v-if="datas.length > 9" :number="40" :type="type2string(datas[9].type, datas[9].status)"/>
    </div>
  </div>
</template>
<script>
import UsingSeat from '@/components/UsingSeat';
import EmptySeat from './EmptySeat';
import FemaleSeat from './FemaleSeat';
import DisabledSeat from './DisabledSeat';
export default {
    props:{
      datas: [],
    },
    components: {UsingSeat,EmptySeat,FemaleSeat,DisabledSeat},
    data() {
    return {
        }
    },
    setup() {},
    created() {},
    unmounted() {},
  methods:{
    type2string(t, state) {
      if (state) {
        return 'using'
      }
      switch (t){
        case "일반": {
          return "normal"
        }
        case "장애인": {
          return "disabled"
        }
        case "여성": {
          return "women"
        }
      }
    }
  }
}
</script>
<style scoped>
.container{
  position: absolute;
  width: 250px;
  box-sizing: border-box;
  right: 22.5%;
  transform: translateX(50%);
}

.group-top {
  display: flex;
  flex-direction: row;
}

.group-bottom {
  display: flex;
  flex-direction: row;
}
</style>
