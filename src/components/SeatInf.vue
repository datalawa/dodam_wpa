<template>
    <div class="container-seat-info">
        <div class="item-root">
          <div style="background:#F28B2C" class="item"></div>
          <div class="item-text">일반석</div>
        </div>
        <div class="item-root">
          <div style="background:#5AA6EF" class="item">
            <span class="material-icons-round">accessible</span>
          </div>
          <div class="item-text">장애인석</div>
        </div>
        <div class="item-root">
          <div style="background:#F25672" class="item">
            <span class="material-icons-round">woman</span>
          </div>
          <div class="item-text">여성전용석</div>
        </div>
      <div class="item-root">
        <div style="background:#C7C7C7" class="item"></div>
        <div class="item-text">사용중</div>
      </div>
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
.container-seat-info {
    display: flex;
    flex-direction: row;
    align-content: center;
  gap: 16px;
  height: 30px;
}

.item-root {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /*align-items: flex-start;*/
  gap: 6px;
}

.item-text {
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 600;
}

.item{
    box-sizing: border-box;
    height: 30px;
    width: 30px;
}

.material-icons-round {
  color: white;
  box-sizing: border-box;
  padding-left: 3px;
  padding-top: 3px;
}
</style>
