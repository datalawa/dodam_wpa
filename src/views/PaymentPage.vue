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
                <PaymentDetailItem v-for="item in resultper" v-bind:key="item"
                                   :title="item.name" :price="item.cost"></PaymentDetailItem>
              </div>
              <hr class="sec dashed">
              <div class="section-fee-total">
                <div class="section-fee-total-title">합계</div>
                <div class="section-fee-total-amount">{{ numberWithCommas(totalper) }}원</div>
              </div>
            </div>
            <div class="section-fee-common background-shadow card">
              <div class="fee-text-title">공동부과 목록</div>
              <hr class="dashed">
              <div class="section-board-content-root dashboard-section-article-list">
                <PaymentDetailItem v-for="item in resultpublic" v-bind:key="item"
                                   :title="item.name" :price="item.per_cost"></PaymentDetailItem>
              </div>
              <hr class="sec dashed">
              <div class="section-fee-total">
                <div class="section-fee-total-title">합계</div>
                <div class="section-fee-total-amount">{{ numberWithCommas(totalpublic) }}원</div>
              </div>
            </div>
          </div>
          <div class="payment-left">
            <div class="payment-left-price">
              <div class="payment-left-price-title">결제금액</div>
              <div class="payment-left-price-num">{{ numberWithCommas(totalper + totalpublic) }}원</div>
            </div>
            <div id="paypal-button-container"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";
import SideBar from "@/components/sidebar/SideBar";
import NavigationBar from "@/components/NavigationBar";
import PaymentDetailItem from "@/components/list/PaymentDetailItem";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "PaymentPage",
  components: {PaymentDetailItem, SideBar, NavigationBar},
  setup: () => {
    const store = useStore()
    return {
      user: computed(() => store.state.user),
      role: computed(() => store.state.role),
      idToken: computed(() => store.state.idToken),
      uid: computed(() => store.state.uid),
      authIsReady: computed(() => store.state.authIsReady),
      houseHold: computed(() => store.state.houseHold),
    }
  },
  data: () => {
    let dateTime = new Date()
    dateTime = new Date(dateTime.toISOString().substring(0, 7) + '-01')
    dateTime.setMonth(dateTime.getMonth() - 1)

    return {
      total: 0,
      resultper: [],
      resultpublic: [],
      totalper: 0,
      totalpublic: 0,
      billData: [],
      selectedDate: dateTime,
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
    },
  },
  async mounted() {
    if (this.authIsReady) {
      this.getBillHouseHold();
    }
  },
  methods: {
    numberWithCommas(x) {
      return String(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    async getBillHouseHold() {
      this.resultper = []
      this.resultpublic = []
      this.totalper = 0
      this.totalpublic = 0
      const dtString = this.selectedDate.toISOString().substring(0, 7) + '-01'
      const result = await this.$axios.get(
        "https://api.springnote.blog/api/v1/bill/data/" + dtString + "/household/" + this.houseHold, {
          timeout: 5000,
          headers: {
            Authorization: "Bearer " + this.idToken
          }
        },
      )
      console.log("qwewqwe",result);


      if (result !== null && result.status == 200) {
        console.log(result)
        this.resultper = result.data.per_costs
        this.resultpublic = result.data.all_costs

        for (let i=0; i<this.resultper.length; i++) {
          this.totalper = this.totalper + this.resultper[i].cost}

        for (let i=0; i<this.resultpublic.length; i++) {
          this.totalpublic = this.totalpublic + this.resultpublic[i].per_cost}
        this.makeTotal()
      } else {
        alert("부과목록 오류")
      }
    },
    makeTotal() {
      let total = (this.totalper + this.totalpublic) * 110 / 100
      total = String(Math.ceil((this.totalper + this.totalpublic) / 1300 * 100) / 100);
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
                alert('결제 완료');
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
    }
  },
  watch: {
    authIsReady: function (val) {
      if (val) {
        console.log(val)
        this.getBillHouseHold()
      }
    }
  }
}
</script>

<style scoped>
@import "../css/payment-main.css";
</style>
