<template>
  <div class="container">
    <div class="group-top">
      <UsingSeat :number="1" type="disabled"/>
      <UsingSeat :number="2" type="disabled"/>
      <UsingSeat :number="3" type="disabled"/>
      <UsingSeat :number="4" type="women"/>
      <UsingSeat :number="5" type="women"/>
    </div>
    <div class="group-bottom">
      <UsingSeat :number="6" type="using"/>
      <UsingSeat :number="7" type="using"/>
      <UsingSeat :number="8" type="using"/>
      <UsingSeat :number="9" type="using"/>
      <UsingSeat :number="10" type="using"/>
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
        number:Number
    },
    components: {UsingSeat,EmptySeat,FemaleSeat,DisabledSeat},
    data() {
    return {
        }
    },
    setup() {},
    created() {},
    unmounted() {},
    methods:{}
}
</script>
<style scoped>
.container{
  position: absolute;
  width: 250px;
  box-sizing: border-box;
  left: 22.5%;
  transform: translateX(-50%);
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
