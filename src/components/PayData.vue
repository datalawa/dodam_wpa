<template>
    <div>

    </div>
</template>
<script>
import store from '../store/index.js'
import { loadScript } from "@paypal/paypal-js";
import SideBar from "@/components/sidebar/SideBar";
import NavigationBar from "@/components/NavigationBar";
import PaymentDetailItem from "@/components/list/PaymentDetailItem";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: 'PayData',
  props: {
    payox: {
      type:String,
      default:'Payox'
    },
    date: {
      type:String,
      default:'Date'
    },
    cost: {
      type:String,
      default:'Cost'
    }
  },

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
      household: computed(() => store.state.household),
    }
  },

  //   created() {},
  //   unmounted() {},
  methods: {
    async getstatus() {
      const idToken = this.idToken
      const uid = this.uid
      try {
        const response = await this.$axios.get(
          "https://api.springnote.blog/api/v1/pay/household/" + this.household,
          {
            headers: {
              Authorization: 'Bearer' + idToken
            },
            timeout: 5000
          },
        )
        if (response.status === 200) {
          console.log('paydata getStatus', response)
          this.payox = response.data.status_name
        //   await this.getstatus()
        } else {
          console.error(response.data)
          alert('통신 오류')
          return;
        }
      } catch (e) {
        console.error(e.response.data)
        alert('통신 오류')
        return;3
      }
    },

    async getdate() {
      const idToken = this.idToken
      const uid = this.uid
      try {
        const response = await this.$axios.get(
          "https://api.springnote.blog/api/v1/pay/household/" + this.household,
          {
            headers: {
              Authorization: 'Bearer' + idToken
            },
            timeout: 5000
          },
        )
        if (response.status === 200) {
          console.log(response)
          this.date = response.data.mod_dttm
        //   await this.getdate()
        } else {
          console.error(response.data)
          alert('통신 오류')
          return;
        }
      } catch (e) {
        console.error(e.response.data)
        alert('통신 오류')
        return;
      }
    },

    async getcost() {
      const idToken = this.idToken
      const uid = this.uid
      try {
        const response = await this.$axios.get(
          "https://api.springnote.blog/api/v1/pay/household/" + this.household,
          {
            headers: {
              Authorization: 'Bearer' + idToken
            },
            timeout: 5000
          },
        )
        if (response.status === 200) {
          console.log(response)
          this.cost = response.data.cost
        //   await this.getcost()
        } else {
          console.error(response.data)
          alert('통신 오류')
          return;
        }
      } catch (e) {
        console.error(e.response.data)
        alert('통신 오류')
        return;
      }
    }
  },

  async mounted() {
    this.getstatus()
    this.getdate()
    this.getcost()
  }
}
</script>

<style>
@import "../css/view-main.css";
</style>