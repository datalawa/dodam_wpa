<template>
    <div class="container">
        <UsingSeat :number="11">11</UsingSeat>
        <UsingSeat>12</UsingSeat>
        <UsingSeat>13</UsingSeat>
        <UsingSeat>14</UsingSeat>
        <UsingSeat>15</UsingSeat>
        <UsingSeat>16</UsingSeat>
        <UsingSeat>17</UsingSeat>
        <UsingSeat>18</UsingSeat>
        <UsingSeat>19</UsingSeat>
        <UsingSeat>20</UsingSeat>
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
    height: 140px;
    width: 370px;
    padding: 50px 50px 50px 50px;

    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;   
    align-content: flex-start;  
}
</style>