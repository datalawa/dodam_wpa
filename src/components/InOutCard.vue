<template>
  <div class="content-box-root background-shadow card">
    <div class="content-box">
      <div class="car-number">{{ carNum }}</div>
      <div class="car-inout-time-root">
        <div class="car-inout-time-time">
          {{("00" + inTime.getMonth().toString()).slice(-2) +
        '.' + ("00" + inTime.getDay().toString()).slice(-2) + " " +
        ("00" + inTime.getHours().toString()).slice(-2)
        + ":" + ("00" + inTime.getMinutes().toString()).slice(-2)  +
        ":" + ("00" + inTime.getSeconds().toString()).slice(-2)}}
        </div>
        <div class="car-inout-time-text">
          최근 입차 시간
        </div>
      </div>
    </div>
    <div class="content-box-buttons">
      <v-btn
        class="content-box-buttons-button"
        icon="mdi-car-search"
        color="primary"
        variant="tonal"
        size="x-small"
      ></v-btn>
    </div>
  </div>
</template>
<script>
import CarNum from '@/components/CarNum';

export default {
  name: 'InOutCard',
  components: {CarNum},
  props:{
    inTime:{
      type: Date,
      default: () => {return new Date()}
    },
    carNum: {
      type: String,
      default: '12가 1234'
    }
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.content-box-root {
  display: flex;
  flex-direction: row;
  background: #FFFFFF;
  padding: 18px;
  flex-shrink: 0;
  flex-grow: 0;
  width: 220px;

  gap: 18px;
}

.content-box{
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1;
}

.car-number {
  width: 100%;
  /*text-align: center;*/

  font-weight: 800;
  font-size: 20px;
}

.car-inout-time-root {
  display: flex;
  flex-direction: column;
}

.car-inout-time-time {
  font-weight: 600;
}

.car-inout-time-text {
  font-size: 14px;
}

.content-box-buttons {
  position: relative;
}

.content-box-buttons-button {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
