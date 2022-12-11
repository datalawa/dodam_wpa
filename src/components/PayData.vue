<template>
    <div>

    </div>
</template>
<script>
import store from '../store/index.js'
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
//   setup() {},
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