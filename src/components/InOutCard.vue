<template>
    <div class="content-box">
        <br>
        <h3><CarNum :carnum="carnum" /></h3>
        <p>최근 입차 시간 {{intime}}</p>
        <br>
        <nav>
        <router-link to="/datalawa/mycar" class="link">본인 차량 조회</router-link>|
        <router-link to="/datalawa/inout" class="link">입출차 기록</router-link>
        </nav>
        <router-view/>
    </div>
</template>
<script>
import CarNum from '@/components/CarNum';

export default {
  name: 'InOutCard',
  components: {CarNum},
  props:{
    intime:{
      type:String,
      default:"intime"
    }
  },
  data() {
    return {
    //   carnum: '12가 1234'
    }
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.content-box{
    /* position: relative; */
    float : left;
    margin : 30px;
    width: 260px;
    height: 182px;
    left: 328px;
    top: 131px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    border-radius: 18px;
    text-align: center;
}
a {
    font-size: '10px';
    text-decoration: none;
}
</style>