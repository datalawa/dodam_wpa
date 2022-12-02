<template>
    <div class="item"><img src="female.svg" />{{number}}</div>
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

    background: #F25672;

    border: 1px solid #FFFFFF;
    border-radius: 18px;
}
img{
    height:40px;
    width:30px;
    padding-top: 20px;
}
</style>