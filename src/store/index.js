import { createStore } from 'vuex'
import { auth } from "@/plugins/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {tr} from "vuetify/lib/locale";

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log(state.user)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
    async signUp(context, { email, password }) {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit('setUser', response.user);
      } else {
        throw new Error('signup failed');
      }
    },
    async logIn(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('login failed')
      }
    },
    async logOut(context){
      await signOut(auth)
      console.log('logout')
      context.commit('setUser', null)
    }
  }
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  console.log(user)
  unsub()
})

export default store;
