<template>
    <div class="content-box">
        <h3>{{carnum}}</h3>
        <p>{{intime}}</p>
        <br>
        <nav>
        <router-link to="/datalawa/mycar" style ="style1">본인 차량 조회</router-link>|
        <router-link to="/datalawa/inout" style ="style1">입출차 기록</router-link>
        </nav>
  <router-view/>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      carnum: '12가 1234',
      intime: '01:01:00',
      style1: {
        fontsize: '20px'
      }
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
    position: absolute;
    width: 236px;
    height: 182px;
    left: 328px;
    top: 131px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    border-radius: 18px;
}
</style>