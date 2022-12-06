<template>
  <NavigationBar></NavigationBar>
  <div id="section-main" class="open">
    <SideBar :is-hidden="true"></SideBar>
    <div id="section-main-transparent" class="open"></div>
    <div id="section-main-content">
      <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card width="530" height="600" class="elevation-12">
            <v-toolbar color="white" dark flat></v-toolbar>
            <div class="pa-2">
                <h1 style="text-align: center">LOGIN</h1>
            <v-container grid-list-md fluid>
              <v-layout row wrap>
                <v-divider></v-divider>
              </v-layout>
            </v-container>

            <v-card-text>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-card-text class="text-center">로그인을 하시면 더욱 편리하게 이용하실 수 있습니다.</v-card-text>

                <v-text-field
                v-model="email"
                  label="이메일 주소를 입력하세요."
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  hint="@ 포함하여 입력하세요."
                  color="red"
                ></v-text-field>

                <v-text-field
                v-model="password"
                  id="password"
                  label="비밀번호를 입력하세요."
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  hint="최소 6자입니다."
                  color="red"
                  counter
                ></v-text-field>

                <div class="mt-3 d-flex flex-row-reverse">
                  <v-btn
                      color="#7C12A6"
                      block
                      rounded
                      size="45px"
                      v-on:click="login"
                  >
                    로그인
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>

            <v-card-actions class="justify-center">
              <v-btn color="black">아이디(이메일) 찾기</v-btn> |
              <v-btn color="black">비밀번호 찾기</v-btn> |
              <v-btn color="black" @click="$router.push('/signup')">회원가입</v-btn>
              <!-- <router-link to="/signup">SignUp</router-link> -->
            </v-card-actions>
           </div>
          </v-card>
        </v-col>
      </v-row>
     </v-container>
    </div>
  </div>
</template>

<script>
  // Import the functions
  import firebase from 'firebase/compat/app';
  // import 'firebaseui';
  import 'firebase/compat/app';
  import 'firebase/compat/analytics';
  import 'firebase/compat/firestore';
  import 'firebase/compat/auth';
  import { signInWithEmailAndPassword } from '@firebase/auth';
  import { getAuth } from '@firebase/auth';
  import getConfig from '../secrets/secret';

  // Initialize Firebase
  const firebaseConfig = getConfig();
  const app = firebase.initializeApp(firebaseConfig);


import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import Login from './Login.vue';

export default {
  name: "LoginPage",
  components: {SideBar, NavigationBar},
  data () {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      login () {
        // const email = document.getElementById('email').vt;
        // const password = document.getElementById('password').textContent;
        console.log(this.email," ",this.password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          console.log(errorMessage)
          console.log(errorCode)
        });
      },
      // 로그인 상태가 변경될 때마다 호출
      user_data() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
        // ...
        } else {
      // User is signed out
      // ...
        }
      });
    }
  }
}
</script>

<style>
@import "../css/view-main.css";
</style>