<template>
    <div class="container">
      <UsingSeat :number="11"/>
        <UsingSeat :number="12"/>
        <UsingSeat :number="13"/>
        <UsingSeat :number="14"/>
        <UsingSeat :number="15"/>
        <UsingSeat :number="16"/>
        <UsingSeat :number="17"/>
        <UsingSeat :number="18"/>
        <UsingSeat :number="19"/>
        <UsingSeat :number="20"/>
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
  right: 107.5px;
    width: 370px;
    padding: 50px 50px 50px 50px;

    box-sizing: border-box;

    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*justify-content: flex-start;*/
    /*align-content: flex-start;*/
}
</style>
