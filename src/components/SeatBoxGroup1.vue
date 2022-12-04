<template>
    <div class="container">
        <UsingSeat :number="1"/>
        <UsingSeat :number="2"/>
        <UsingSeat :number="3"/>
        <UsingSeat :number="4"/>
        <UsingSeat :number="5"/>
        <UsingSeat :number="6"/>
        <UsingSeat :number="7"/>
        <UsingSeat :number="8"/>
        <UsingSeat :number="9"/>
        <UsingSeat :number="10"/>
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
  left: 107.5px;

  width: 370px;
  padding: 50px 50px 50px 50px;

  box-sizing: border-box;

  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
