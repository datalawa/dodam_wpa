import { createStore } from 'vuex'
import { auth } from '@/plugins/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import axios from "axios";
import { tr } from 'vuetify/lib/locale'

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    idToken: '',
    parking1FData: [],
    parkingB1Data: [],
    role: 0,
    uid: "",
    houseHold: -1,
    name: ""
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      console.log(state.user)
      unsub()
    },
    setAuthIsReady (state, payload) {
      state.authIsReady = payload
    },
    setTokenUID(state, payload) {
      state.idToken = payload
    },
    setParking1FData(state, payload) {
      state.parking1FData = payload
      console.log("f1", payload)
    },
    setParkingB1Data(state, payload) {
      state.parkingB1Data = payload
    },
    seUserRole(state, payload) {
      state.role = payload
    },
    seUid(state, payload) {
      state.uid = payload
    },
    seHoushold(state, payload) {
      state.houseHold = payload
    },
    setName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    async signUp (context, { email, password }) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
        unsub()
      } else {
        throw new Error('signup failed')
      }
    },
    async logIn (context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
        unsub()
      } else {
        throw new Error('login failed')
      }
    },
    async logOut (context) {
      context.commit('setUser', null)
      context.commit('setAuthIsReady', false)
      await signOut(auth)
      console.log('logout')
    },
    async setUserInfo(context, user) {
      const response = await user.getIdToken()
      console.log(response)
      if (response) {
        context.commit('setTokenUID', response)
        const uid = await user.uid
        let userData = await axios.get(
          "https://api.springnote.blog/api/v1/user/" + uid,
          {
            headers: {
              Authorization: "Bearer " + response,
            }
          }
        )

        if (userData) {
          console.log(userData)
          context.commit('seUid', uid)
          context.commit('seUserRole', userData.data.role_id)
          context.commit('seHoushold', userData.data.household_id)
          context.commit('setName', userData.data.name)
          context.commit('setAuthIsReady', true)
          console.log('store household', userData.data.household_id)
        } else {
          throw new Error('get role failed')
        }
      } else {
        throw new Error('login failed')
      }
    }
  }
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setUser', user)
  store.dispatch('setUserInfo', user)
  console.log(user)
})

export default store
