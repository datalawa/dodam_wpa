<template>
  <ParkingLotData :B1seat="25" :F1seat="20" :floor="'B1'" />
</template>
<script>
import ParkingLotData from '@/components/ParkingLotData'
export default {
  components: { ParkingLotData },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>

</style>
