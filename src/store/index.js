import { createStore } from 'vuex'
import { auth } from '@/plugins/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { tr } from 'vuetify/lib/locale'

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      console.log(state.user)
    },
    setAuthIsReady (state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
    async signUp (context, { email, password }) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('signup failed')
      }
    },
    async logIn (context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('login failed')
      }
    },
    async logOut (context) {
      await signOut(auth)
      console.log('logout')
      context.commit('setUser', null)
    },
    async getIdToken (context) {
      const idToken = await firebase.auth().currentUser?.getIdToken(true)
      context.commit('set_userIdToken', idToken ? idToken : "");
    }
    // firebase.auth().onAuthStateChanged(user => {
    //     user.getIdToken(/*forceRefresh*/ true)
    //       .then(idToken => {
    //         store.dispatch("updateUserStore", {'token': idToken, 'uid': user.uid});
    //       }).catch(function(error) {
    //         // Handle error
    //       });
    // })
  }
})

export default store
