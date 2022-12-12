<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar :is-hidden="true"></SideBar>
    <div id="section-main-transparent"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">관리비 납부</div>
          <div class="section-top-right">
            101동 102호
          </div>
        </div>
        <div class="payment-content">
          <div class="section-fee-list">
            <div class="section-fee-personal background-shadow card">
              <div class="fee-text-title">개인부과 목록</div>
              <hr class="dashed">
              <div class="section-board-content-root dashboard-section-article-list">
                <PaymentDetailItem v-for="item in getTestDetailArticleList" v-bind:key="item"
                                   :title="item.title" :price="item.price"></PaymentDetailItem>
              </div>
              <hr class="sec dashed">
              <div class="section-fee-total">
                <div class="section-fee-total-title">합계</div>
                <div class="section-fee-total-amount">{{ numberWithCommas(9483) + '원' }}</div>
              </div>
            </div>
            <div class="section-fee-common background-shadow card">
              <div class="fee-text-title">공동부과 목록</div>
              <hr class="dashed">
              <div class="section-board-content-root dashboard-section-article-list">
                <PaymentDetailItem v-for="item in getTestDetailArticleList" v-bind:key="item"
                                   :title="item.title" :price="item.price"></PaymentDetailItem>
              </div>
              <hr class="sec dashed">
              <div class="section-fee-total">
                <div class="section-fee-total-title">합계</div>
                <div class="section-fee-total-amount">{{ numberWithCommas(9483) + '원' }}</div>
              </div>
            </div>
          </div>
          <div class="payment-left">
            <div class="payment-left-price">
              <div class="payment-left-price-title">결제금액</div>
              <div class="payment-left-price-num">{{ numberWithCommas(total) }}원</div>
            </div>
            <div id="paypal-button-container"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function numberWithCommas(x) {
  return String(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<script>
import { loadScript } from "@paypal/paypal-js";
import SideBar from "@/components/sidebar/SideBar";
import NavigationBar from "@/components/NavigationBar";
import PaymentDetailItem from "@/components/list/PaymentDetailItem";
// import axios from "axios";
// import {useStore} from "vuex";
// import {computed} from "vue";

export default {
  name: "PaymentPage",
  components: {PaymentDetailItem, SideBar, NavigationBar},
  data: () => {
    return {
      total: 233049
    }
  },
  computed: {
    getTestDetailArticleList() {
      let articleDatas = []
      for (let i = 0;i < 5;i++) {
        const price = (Math.random() + 1) * 1000
        articleDatas.push({
          title: '제목' + i,
          price: price,
        })
      }
      return articleDatas
    }
  },
  created() {
    let total = String(Math.ceil(this.total / 1300 * 100) / 100);
    loadScript({
      "client-id": 'ASSekI5oIma6ysxWN3j3UfqPFIy_TL_lHc1ZHjY-68xIc1PTOZcj7ZrKyBSBukIj187kS0ZAgAqW2EB8',
      "buyer-country": "KR",
      'locale': 'ko_KR',
      'debug': true
    })
        .then((paypal) => {
          console.log(paypal)
          paypal.Buttons({
            style: {
              layout: 'vertical',
              color:  'blue',
              shape:  'rect',
              label:  'paypal'
            },
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: total
                  }
                }]
              });
            },
            onApprove: function(data, actions) {
              // This function captures the funds from the transaction.
              return actions.order.capture().then(function (details) {
                // This function shows a transaction success message to your buyer.
                alert('Transaction completed by ' + details.payer.name.given_name);
              });
            },
            onCancel: function (data) {
              console.log(data)
            },
            onError: function (err) {
              console.error(err)
            }
          }).render('#paypal-button-container');
        })
        .catch((err) => {
          console.error(err)
        });
  },
  method:{
  }
}
</script>

<style scoped>
@import "../css/payment-main.css";
</style>
