<template>
    <div class="container">
        <div style="background:#F28B2C" class="item"></div>일반석&emsp;&emsp;
        <div style="background:#5AA6EF" class="item"><img src="156822.svg" /></div>장애인석&emsp;&emsp;
        <div style="background:#F25672" class="item"><img src="female.svg" /></div>여성전용석&emsp;&emsp;
        <div style="background:#C7C7C7" class="item"></div>사용중&emsp;&emsp;
    </div>
</template>
<script>
export default {
    props:{
        name:String
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
.container{
    height: 30px;
    width: 900px;

    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;   
    align-content: flex-end;  
}

.item{
    box-sizing: border-box;
    height: 30px;
    width: 45px;
}
</style>