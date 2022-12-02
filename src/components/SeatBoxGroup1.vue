<template>
    <div class="container">
        <UsingSeat>1</UsingSeat>
        <UsingSeat>2</UsingSeat>
        <UsingSeat>3</UsingSeat>
        <UsingSeat>4</UsingSeat>
        <UsingSeat>5</UsingSeat>
        <UsingSeat>6</UsingSeat>
        <UsingSeat>7</UsingSeat>
        <UsingSeat>8</UsingSeat>
        <UsingSeat>9</UsingSeat>
        <UsingSeat>10</UsingSeat>
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
