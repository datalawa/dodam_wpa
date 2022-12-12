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
  name: 'paydata',
  props:{
    payox:{
      type:String,
      default:'Payox'
    },
    date:{
      type:String,
      default:'Date'
    },
    cost:{
      type:String,
      default:'Cost'
    }
  },
  components: {},
  data() {
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
    }
  },

//   created() {},
//   unmounted() {},
  methods: {
    async getstatus() {
      const idToken = await this.user.getIdToken()
      const uid = await this.user.uid
      await this.axios.get("https://api.springnote.blog/api/v1/pay/household/{}", {
        headers: { Authorization: "Bearer" + idToken }
      })
        .then((res)=>{
          console.log(res);
          this.payox = res.data.data;
        }).catch((err) => {
          console.log(err);
        })
    },
    async getdate() {
      const idToken = await this.user.getIdToken()
      const uid = await this.user.uid
      await this.axios.get("https://api.springnote.blog/api/v1/pay/household/{}", {
        headers: { Authorization: "Bearer" + idToken }
      })
        .then((res)=>{
          console.log(res);
          this.date = res.data.data;
        }).catch((err) => {
          console.log(err);
        })
    },
    async getcost() {
      const idToken = await this.user.getIdToken()
      const uid = await this.user.uid
      await this.axios.get("https://api.springnote.blog/api/v1/pay/household/{}", {
        headers: { Authorization: "Bearer" + idToken}
      })
        .then((res)=>{
          console.log(res);
          this.cost = res.data.data;
        }).catch((err) => {
          console.log(err);
        })
    }
  },
  async mounted() {
    this.getstatus()
    this.getdate()
    this.getcost()
  }
}
</script>