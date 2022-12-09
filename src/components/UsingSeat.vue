<template>
  <div class="item"
       :class="{
    normal: type === 'normal',
    disabled: type === 'disabled',
    women: type === 'women',
    using: type === 'using'
  }">
    <div class="item-number">{{number}}</div>
    <div>
      <span v-if="type === 'disabled'" class="material-icons-round">accessible</span>
      <span v-else-if="type === 'women'" class="material-icons-round">woman</span>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        number:Number,
      type: {
          type: String,
          default: 'normal'
      }
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

    text-align: center;

    border: 1px solid #FFFFFF;
    border-radius: 18px;
  color: white;

  padding: 5px;
}

.using {
  background: #C7C7C7;
}

.normal {
  background: #F28B2C;
}

.disabled {
  background: #5AA6EF;
}

.women {
  background: #F25672;
}

.item-number {
  font-weight: 600;
}
</style>
