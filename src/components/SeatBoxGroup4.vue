<template>
    <div class="container">
        <UsingSeat>31</UsingSeat>
        <UsingSeat>32</UsingSeat>
        <UsingSeat>33</UsingSeat>
        <UsingSeat>34</UsingSeat>
        <UsingSeat>35</UsingSeat>
        <UsingSeat>36</UsingSeat>
        <UsingSeat>37</UsingSeat>
        <UsingSeat>38</UsingSeat>
        <UsingSeat>39</UsingSeat>
        <UsingSeat>40</UsingSeat>
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