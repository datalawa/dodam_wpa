<template>
    <NavigationBar></NavigationBar>
    <div id="section-main" class="open">
      <SideBar :is-hidden="false"></SideBar>
      <div id="section-main-transparent" class="open"></div>
      <div id="section-main-content">
        <div class="section-board-root">
          <div class="section-board-top">
            <h3>납부기록</h3>
            총 1건의 납부한 결과가 있습니다.
            <v-table class="content-box">
            <thead>
                <tr>
                <th>
                    납부상태
                </th>
                <th>
                    날짜
                </th>
                <th>
                    납부액
                </th>
                </tr>
            </thead>
            <tbody v-if="household >= 0">
                <tr :key="i" v-for="(item, i) in payox">
                        <td>{{item}}</td>
                        <td>{{date[i]}}</td>
                        <td>{{cost[i]}}</td>
                </tr>
            </tbody>
            </v-table>
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
import store from '../../store/index.js'

export default {
  name: 'PayData',
  components: {NavigationBar, SideBar, PaymentDetailItem},

  data: () => {
    return {
      payox: [],
      date: [],
      cost: [],
    }
  },
  setup: () => {
    const store = useStore()
    return {
      user: computed(() => store.state.user),
      role: computed(() => store.state.role),
      idToken: computed(() => store.state.idToken),
      uid: computed(() => store.state.uid),
      household: computed(() => store.state.houseHold),
    }
  },
  mounted() {
    if (this.household >= 0) {
      this.getstatus()
      this.getdate()
      this.getcost()
    }
  },
  //   created() {},
  //   unmounted() {},
  methods: {
    async getstatus() {
      const idToken = this.idToken
      console.log('status token', idToken)
      console.log('status household', this.household)
      const uid = this.uid
      try {
        const response = await this.$axios.get(
          "https://api.springnote.blog/api/v1/pay/household/" + this.household,
          {
            headers: {
              Authorization: 'Bearer ' + idToken
            },
            timeout: 5000
          },
        )
        if (response.status === 200) {
          console.log('paydata getStatus', response)
        //   this.payox = response.data.status_name

        for(var i = 0; i < response.data.length; i++){
            this.payox.push(response.data[i].status_name)
        }
        console.log("payox", this.payox)

        } else {
          console.error(response.data)
          alert('통신 오류')
          return [];
        }
      } catch (e) {
        console.error(e)
        alert('통신 오류')
        return [];
      }
    },

    async getdate() {
      const idToken = this.idToken
      console.log('status token', idToken)
      console.log('status household', this.household)
      const uid = this.uid
      try {
        const response = await this.$axios.get(
          "https://api.springnote.blog/api/v1/pay/household/" + this.household,
          {
            headers: {
              Authorization: 'Bearer ' + idToken
            },
            timeout: 5000
          },
        )
        if (response.status === 200) {
          console.log('paydata getDate', response)
          //   this.payox = response.data.status_name
          for(var i = 0; i < response.data.length; i++){
            this.date.push(response.data[i].mod_dttm)
        }
        console.log("date", this.date)

        } else {
          console.error(response.data)
          alert('통신 오류')
          return [];
        }
      } catch (e) {
        console.error(e.response.data)
        alert('통신 오류')
        return [];
      }
    },

    async getcost() {
      const idToken = this.idToken
      console.log('status token', idToken)
      console.log('status household', this.household)
      const uid = this.uid
      try {
        const response = await this.$axios.get(
          "https://api.springnote.blog/api/v1/pay/household/" + this.household,
          {
            headers: {
              Authorization: 'Bearer ' + idToken
            },
            timeout: 5000
          },
        )
        if (response.status === 200) {
          console.log('paydata getCost', response)
        //   this.payox = response.data.status_name
        for(var i = 0; i < response.data.length; i++){
            this.cost.push(response.data[i].cost)
        }
        console.log("cost", this.cost)

          return response.data
        //   await this.getcost()
        } else {
          console.error(response.data)
          alert('통신 오류')
          return [];
        }
      } catch (e) {
        console.error(e.response.data)
        alert('통신 오류')
        return [];
      }
    }
  },
  watch: {
    household: function (val) {
      console.log(val)
      this.getstatus()
      this.getdate()
      this.getcost()
    }
}
}
</script>

<style>
@import "../../css/view-main.css";
</style>
