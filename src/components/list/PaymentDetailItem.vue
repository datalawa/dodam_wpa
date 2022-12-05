<template>
  <div class="board-item-complain-root">
    <div class="board-item-complain-up">
      <div class="board-item-detail-title">{{ title }}</div>
      <div class="board-item-detail-fee">{{ numberWithCommas(price) + '원' }}</div>
    </div>
<!--    <div class="section-board-content-divider"></div>-->
  </div>
</template>

<script setup>
function numberWithCommas(x) {
  x = Math.ceil(x)
  return String(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<script>
export default {
  name: "PaymentDetailItem",
  props: {
    title: {
      default: 'Title',
      type: String
    },
    price: {
      default: 0,
      type: Number
    },
  }
}
</script>

<style>
@import "../../css/item-payment-detail.css";
</style>
