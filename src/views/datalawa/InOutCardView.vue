<template>
    <!-- <div class="content-box">
        <br>
        <h3>{{carnum}}</h3>
        <p>최근 입차 시간<InOutData :intime="intime" /> intime</p>
        <nav>
        <router-link to="/datalawa/mycar" class="link">본인 차량 조회</router-link>|
        <router-link to="/datalawa/inout" class="link">입출차 기록</router-link>
        </nav>
        <router-view/>
    </div> -->
    <div>
      <InOutCard />
      <InOutCard />
      <InOutCard />
    </div>
</template>
<script>
import InOutCard from '@/components/InOutCard';

export default {
  name: 'InOutCards',
  components: {InOutCard},
  data() {
    return {
      // carnum: '12가 1234'
    }
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {}
}
</script>
<!-- <style scoped>
.content-box{
    position: absolute;
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
</style> -->

<!-- <template>
    <div>
        <v-card style="width: 20%" height="200">
            <br style="font-size:0.3em">
        <v-card-title style="font-size: 2em;">{{carnum}}</v-card-title>
        <br style="font-size: 1.2em;">
        <p style="font-size: 1em;">최근 입차 시간 : {{intime}}</p>
        <nav>
        <router-link to="/datalawa/mycar" style ="style1">본인 차량 조회</router-link>|
        <router-link to="/datalawa/inout" style ="style1">입출차 기록</router-link>
        </nav>
        <router-view/>
        </v-card>

    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      carnum: '12가 1234',
      intime: '01:01:01',
      style1: { fontsize: '30px' }
    }
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {}
}
</script> -->
