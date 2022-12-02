<template>
    <div>{{carnum}}</div>
</template>
<script>
export default {
    name : 'carnum',
    props: {
            carnum:{
                default:'Carnum',
                type:String
            }
    },
    components: {},
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