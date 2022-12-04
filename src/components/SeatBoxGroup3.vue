<template>
    <div class="container">
        <UsingSeat :number="21"/>
        <UsingSeat :number="22"/>
        <UsingSeat :number="23"/>
        <UsingSeat :number="24"/>
        <UsingSeat :number="25"/>
        <UsingSeat :number="26"/>
        <UsingSeat :number="27"/>
        <UsingSeat :number="28"/>
        <UsingSeat :number="29"/>
        <UsingSeat :number="30"/>
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

    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
}
</style>
