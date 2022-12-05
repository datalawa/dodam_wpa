<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar :is-hidden="true"></SideBar>
    <div id="section-main-transparent"></div>
    <div id="section-main-content">
      <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
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
                  label="이메일 주소를 입력하세요."
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  hint="@ 포함하여 입력하세요."
                  color="red"
                ></v-text-field>

                <v-text-field
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
      </v-row>
     </v-container>
    </div>
  </div>
</template>

<script>

  import { initializeApp } from 'firebase/app';
  import getConfig from '../secrets/secret'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

  // // Use this to initialize the firebase App
  var firebaseConfig = getConfig();
  console.log(firebaseConfig);
  const firebase = initializeApp(firebaseConfig);
  console.log(firebase)

  // // Use these for db & auth
  // const db = firebaseApp.firestore();
  // var firebaseui = require('firebaseui');
  // const ui = new firebaseui.auth.AuthUI(auth);
  // console.log(ui)

// 현재 접속한 사용자 인증 정보 가져오기
const auth = getAuth();
console.log(auth)
const user = auth.currentUser;

// 현재 접속한 사용자의 프로필 정보 가져오기
// console.log(user.photoURL);  // 프로필 사진 URL
// console.log(user.phoneNumber);  // 휴대폰 번호
// console.log(user.email);  // 이메일
// console.log(user.displayName);  // 표시 이름
// console.log(user.emailVerified);  // 이메일 인증 여부(boolean)
// console.log(user.isAnonymous);  // 익명 여부(boolean)

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
        const login = async (email, password) => {
          try {
            const auth = getAuth();
            console.log(1)
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            console.log(2)
            const { stsTokenManager, uid } = user;
            console.log(3)
            setAuthInfo({ uid, email, authToken: stsTokenManager });
            console.log(4)
            navigate('/');
            console.log(5)
          } catch ({ error }) {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode)
          }
      }
    }
  }
    // mounted: function() {
    // 임시 : 현재 로그인한 회원의 정보를 알 수 있는 함수. 존재하면 딕셔너리가, 아니면 null값.
    // auth.onAuthStateChanged((user) =>{
    //     if (user) {
    //       alert("이미 로그인 한 사용자입니다!");
    //     }
    //     현재 유저가 존재하지 않으면 로그인창을 보여주기
    //     this.initUI()
    // })
    // }
}
</script>

<style>
@import "../css/view-main.css";
</style>
