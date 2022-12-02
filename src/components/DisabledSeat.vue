<template>
    <div class="item">{{number}}<img src="156822.svg" /></div>
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

    background: #5AA6EF;

    border: 1px solid #FFFFFF;
    border-radius: 18px;
}
img{
    height:35px;
    width:35px;
    padding-top: 20px;
}
</style>