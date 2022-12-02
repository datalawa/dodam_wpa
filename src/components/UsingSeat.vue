<template>
    <div class="item">{{number}}</div>
</template>
<script>
export default {
    props:{
        number:Number
    },
    components: {},
    data() {
    return {
        sampleData:''
        }
    },
    setup() {},
    created() {},
    unmounted() {},
    methods:{}
}
</script>
<style scoped>
.item{
    box-sizing: border-box;
    height: 70px;
    width: 50px;

    background: #C7C7C7;

    border: 1px solid #FFFFFF;
    border-radius: 18px;
}
</style>