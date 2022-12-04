<template>
    <div class="container">
        <UsingSeat :number="31"/>
        <UsingSeat :number="32"/>
        <UsingSeat :number="33"/>
        <UsingSeat :number="34"/>
        <UsingSeat :number="35"/>
        <UsingSeat :number="36"/>
        <UsingSeat :number="37"/>
        <UsingSeat :number="38"/>
        <UsingSeat :number="39"/>
        <UsingSeat :number="40"/>
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
  right: 107.5px;
    width: 370px;
    padding: 50px 50px 50px 50px;

    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
}
</style>
