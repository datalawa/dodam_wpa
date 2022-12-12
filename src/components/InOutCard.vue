<template>
  <div class="content-box-root background-shadow card">
    <div class="content-box">
      <div class="car-number">{{ carNum }}</div>
      <div class="car-inout-time-root">
        <div class="car-inout-time-time">
          {{ inTime !== null?getTimeData(inTime):'-' }}
        </div>
        <div class="car-inout-time-text">
          최근 {{ inoutType?"출차":"입차" }} 시간
        </div>
      </div>
    </div>
    <div class="content-box-buttons">
      <v-dialog
        v-model="dialog" z-index="999999" max-width="500px">
        <template v-slot:activator="{ props }">

          <v-btn
            class="content-box-buttons-button"
            icon="mdi-car-search"
            color="primary"
            variant="tonal"
            size="x-small"
            v-bind="props"
          ></v-btn>
        </template>

        <div class="card dialog-root">
          <div class="dialog-title">차량 상세정보</div>
          <div class="dialog-summary">
            <div class="dialog-summary-title">차량 번호</div>
            <div class="dialog-summary-sub">{{ carNum }}</div>
          </div>
          <hr>
          <div class="dialog-summary">
            <div class="dialog-summary-title">목적</div>
            <div class="dialog-summary-sub">{{ isVisiting ? "방문":"거주" }}</div>
          </div>
          <hr>
          <div class="dialog-summary">
            <div class="dialog-summary-title">차종</div>
            <div class="dialog-summary-sub">{{ vhclType }}</div>
          </div>
        </div>
      </v-dialog>
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
      type: String,
      default: null
    },
    carNum: {
      type: String,
      default: '12가 1234'
    },
    isVisiting: false,
    vhclType: false,
    inoutType: false
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {
    getTimeData(d) {
      return d.substring(5, 7) + '.' + d.substring(8, 10) + ' ' + d.substring(11, 20)
    }
  },
  data () {
    return {
      dialog: false,
    }
  },
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

.dialog-root {
  padding: 28px;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*gap: 18px;*/
  /*max-width: 800px;*/
}

.dialog-title {
  width: 100%;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  display: flex;
  align-items: center;

  color: var(--secondary-text-color);
  margin-bottom: 20px;
}

.dialog-summary {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.dialog-summary-title {
  flex: 1;
  font-weight: 600;
}

.dialog-summary-sub {
  flex: 3;
}

.dialog-root > hr {
  border: 0;
  height: 1px;
  background: rgba(44, 44, 44, 0.22);
  margin-bottom: 6px;
  margin-top: 6px;
}
</style>
