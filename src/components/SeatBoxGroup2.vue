<template>
  <div class="container">
    <div class="group-top">
      <UsingSeat :number="1"/>
      <UsingSeat :number="2"/>
      <UsingSeat :number="3"/>
      <UsingSeat :number="4"/>
      <UsingSeat :number="5"/>
    </div>
    <div class="group-bottom">
      <UsingSeat :number="6"/>
      <UsingSeat :number="7"/>
      <UsingSeat :number="8"/>
      <UsingSeat :number="9"/>
      <UsingSeat :number="10"/>
    </div>
  </div>
</template>
<script>
import UsingSeat from '@/components/UsingSeat'
import EmptySeat from './EmptySeat'
import FemaleSeat from './FemaleSeat'
import DisabledSeat from './DisabledSeat'
export default {
  props: {
    number: Number
  },
  components: { UsingSeat,EmptySeat, FemaleSeat, DisabledSeat },
  data() {
    return {
    }
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {}
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
