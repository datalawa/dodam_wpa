<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <div class="section-board-root">
        <div class="section-board-top">
          <div class="section-board-title">등록 자동차 정보</div>
          <div class="section-top-right">
            101동 102호
          </div>
        </div>
        <div class="section-fee-contents">
          <div class="section-inout-cards" v-if="myCars.length > 0">
            <InOutCard v-for="(item, idx) in myCars" :key="item"
            :car-num="item.id" :is-visiting="item.is_visiting" :vhcl-type="item.vhcl_type_name"
            :in-time="item.dttm" :inout-type="item.inout"></InOutCard>
          </div>
          <div class="card background-shadow inout-root">
            <div class="section-inout-title">입출차 기록</div>
            <v-chip-group
              v-model="chipSelected"
              :mandatory="true" filter>
              <v-chip v-for="item in myCars" :key="item">{{ item.id }}</v-chip>
            </v-chip-group>
            <v-table class="content-box" v-if="carLogs.length > 0">
              <thead>
              <tr>
                <th width="100px">구분</th>
                <th>차종</th>
                <th>목적</th>
                <th>날짜</th>
                <th>기록시각</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="item in carLogs[chipSelected]" :key="item.name">
                <td v-if="item.type" ><div class="board-item-inout-head head-red">출차</div></td>
                <td v-else><div class="board-item-inout-head head-blue">입차</div></td>
                <td>{{ myCars[chipSelected].vhcl_type_name }}</td>
                <td>{{ myCars[chipSelected].is_visiting ? "방문" : "거주" }}</td>
                <td>{{ item.dttm.substring(0, 10) }}</td>
                <td>{{ item.dttm.substring(11, 20) }}</td>
              </tr>
              </tbody>
            </v-table>
          </div>
        </div>
      </div>
    </div>
    <v-dialog
      v-model="dialog" z-index="999999" max-width="500px">
      <template v-slot:activator="{ props }">

        <div class="main-floating-write-button" @click="dialog = true">
          <v-icon icon="mdi-plus"></v-icon>
        </div>
      </template>

      <div class="card dialog-root">
        <div class="dialog-title">차량 추가</div>
        <v-text-field
          :placeholder="'12가3456'"
          v-model="carIdInput" label="차량번호"></v-text-field>
        <v-combobox
          v-model="carPurposeInput"
          label="목적"
          :items="['거주', '방문']"
        ></v-combobox>
        <v-combobox
          v-model="carTypeInput"
          label="차종"
          :items="['소형', '중형', '대형']"
        ></v-combobox>
        <v-btn class="vadd-secc" variant="text" @click="addCar">
          추가
        </v-btn>
      </div>
    </v-dialog>
  </div>
</template>

<script>
const carpd = ['거주', '방문']
const cartd = ['소형', '중형', '대형']

import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import InOutCard from "@/components/InOutCard.vue";
import InOutListView from "@/views/datalawa/InOutListView.vue";
import {computed, ref} from "vue";
import {useStore} from "vuex";
export default {
  name: "CarInOutPage",
  components: {InOutListView, InOutCard, SideBar, NavigationBar},
  data: () => {
    return {
      selectedCarNum: '12가 3456',
      dialog: false,
      carIdInput: '',
      carPurposeInput: '거주',
      carTypeInput: '소형',
      myCars: [],
      chipSelected: -1,
      carLogs: [],
    }
  },
  setup: () => {
    const store = useStore()
    return {
      user: computed(() => store.state.user),
      role: computed(() => store.state.role),
      idToken: computed(() => store.state.idToken),
      uid: computed(() => store.state.uid),
      authIsReady: computed(() => store.state.authIsReady),
    }
  },
  async mounted() {
    this.myCars = await this.getVchlInfo()
    if (this.myCars.length > 0) await this.getInOutLog()
    console.log(this.myCars)
  },
  methods: {
    async addCar() {
      if (this.carIdInput.length < 7) {
        alert("번호 7자 이상 입력")
        return
      }
      if (this.user === null) {
        alert('로그인 안됨')
        return;
      }

      const idToken = await this.user.getIdToken()
      const uid = await this.user.uid
      let userData = null
      try {
        userData = await this.$axios.get(
          "https://api.springnote.blog/api/v1/user/" + uid,
          {
            headers: {
              Authorization: "Bearer " + idToken
            }
          }
        )
      } catch (e) {
        alert('통신 오류0')
        return;
      }
      console.log(userData)
      if (userData.status === 200) {
        const bodyData = {
          id: this.carIdInput,
          name: "string",
          is_visiting: Boolean(carpd.indexOf(this.carPurposeInput)),
          vhcl_type_id: cartd.indexOf(this.carTypeInput) + 1,
          house_hold_id: userData.data.household_id,
        }
        console.log(bodyData)
        try {
          const response = await this.$axios.post(
            "https://api.springnote.blog/api/v1/vhcl/", bodyData, {
              headers: {
                Authorization: "Bearer " + idToken
              }
            }
          )
          if (response.status === 200) {
            await this.getVchlInfo()
          } else {
            console.error(response.data)
            alert('통신 오류3')
            return;
          }
        } catch (e) {
          console.log(e)
          alert('통신 오류2')
          return;
        }
      } else {
        alert('통신 오류1')
        return;
      }
    },
    async getVchlInfo() {
      const idToken = await this.user.getIdToken()
      const uid = await this.user.uid
      let userData = null
      try {
        userData = await this.$axios.get(
          "https://api.springnote.blog/api/v1/user/" + uid,
          {
            headers: {
              Authorization: "Bearer " + idToken,
            }
          }
        )
      } catch (e) {
        alert('통신 오류0')
        return [];
      }

      if (userData.status === 200) {
        let response = null
        try {
          response = await this.$axios.get(
            "https://api.springnote.blog/api/v1/vhcl?houseHoldId=" + userData.data.household_id,
            {
              headers: {
                Authorization: "Bearer " + idToken
              }
            }
          )
        } catch (e) {
          alert('통신 오류3')
          return;
        }

        if (response.status === 200) {
          console.log(response.data)
          if (response.data.length > 0) {
            this.chipSelected = 0
          }
          return response.data
        } else {
          alert('통신 오류2')
          return [];
        }
      } else {
        alert('통신 오류1')
        return [];
      }
      return [];
    },
    async getInOutLog() {
      const idToken = this.idToken
      if (idToken === '') {
        alert("토큰 없음")
        return
      }

      this.carLogs = []
      const carLogs = []
      let idx = 0
      for (let car of this.myCars) {
        let selectedCar = car.id
        console.log(selectedCar)

        let result = null
        try {
          result = await this.$axios.get(
            this.$springUrl + 'api/v1/vhcl/' + selectedCar + '/history/',
            {
              headers: {
                Authorization: "Bearer " + idToken
              },
              timeout: 5000
            }
          )

          if (result !== null && result.status === 200) {
            console.log(result)
            if (result.data.length > 0) {
              carLogs.push(result.data)
              this.myCars[idx].dttm = result.data[0].dttm
              this.myCars[idx].inout = result.data[0].type
            } else {
              carLogs.push([])
              this.myCars[idx].dttm = '-'
              this.myCars[idx].inout = false
            }
          } else {
            alert("통신중 오류")
            carLogs.push([])
            this.myCars[idx].dttm = '-'
            this.myCars[idx].inout = false
          }
        } catch (e) {
          alert("통신중 오류")
          carLogs.push([])
          this.myCars[idx].dttm = '-'
          this.myCars[idx].inout = false
        }
        idx += 1
      }
      this.carLogs = carLogs;
    }
  },
  computed: {
    getTestLog() {
      let articleDatas = []
      let writeTime = new Date();
      for (let i = 0;i < 20;i++) {
        const author = Math.random().toString(36).substring(2, 12)
        writeTime = new Date(writeTime - ((Math.random(24 * 60) + 720) * 60000))
        articleDatas.push({
          type: Math.random() > 0.5,
          carType: '경차',
          purpose: '방문',
          date: writeTime.toISOString().substring(0, 10),
          time: writeTime.toISOString().substring(11, 19)
        })
      }
      return articleDatas
    }
  }
}
</script>

<style>
@import "../css/view-main.css";
@import "../css/inout-main.css";
</style>

<style scoped>
.vadd-secc {
  float: right;
  color: var(--point-color2);
}

.section-fee-contents {
  flex-direction: column !important;
}

.inout-root {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

td {
  text-align: center;
}

.board-item-inout-head {
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
}

.content-box-root {
  display: flex;
  flex-direction: row;
  background: #FFFFFF;
  padding: 18px;
  flex-shrink: 0;
  flex-grow: 0;
  width: 220px;

  gap: 18px;
}

.content-box{
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1;
}

.car-number {
  width: 100%;
  /*text-align: center;*/

  font-weight: 800;
  font-size: 20px;
}

.car-inout-time-root {
  display: flex;
  flex-direction: column;
}

.car-inout-time-time {
  font-weight: 600;
}

.car-inout-time-text {
  font-size: 14px;
}

.content-box-buttons {
  position: relative;
}

.content-box-buttons-button {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.dialog-root {
  padding: 28px;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*gap: 18px;*/
  /*max-width: 800px;*/
}

.dialog-title {
  width: 100%;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 5px;

  display: flex;
  align-items: center;

  color: var(--secondary-text-color);
  margin-bottom: 20px;
}

.dialog-summary {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.dialog-summary-title {
  flex: 1;
  font-weight: 600;
}

.dialog-summary-sub {
  flex: 3;
}

.dialog-root > hr {
  border: 0;
  height: 1px;
  background: rgba(44, 44, 44, 0.22);
  margin-bottom: 6px;
  margin-top: 6px;
}
</style>
