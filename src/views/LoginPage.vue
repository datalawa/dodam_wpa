<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar></SideBar>
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
        </v-col>
      </v-row>
     </v-container>
    </div>
  </div>
</template>

<script>
  import * as firebaseui from 'firebaseui'
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth'
  import 'firebase/compat/firestore'
  import firebaseConfig from '../secrets/secret'
  // // Use this to initialize the firebase App
  firebase.initializeApp(firebaseConfig);

  // // // Use these for db & auth
  // const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const ui = new firebaseui.auth.AuthUI(auth);

import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  name: "LoginPage",
  components: {SideBar, NavigationBar},
  data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      initUI: function() {
      // template에 존재하는 div에 ui.start 명령어를 사용하면 firebaseui가 알아서 그림.
      ui.start("#firebaseui-auth-container", {
        signInoptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
        callbacks: {
          // 로그인이 성공하면,
          signInSuccessWithAuthResult: (authResult) => {
            // 로그인 정보를 각각의 data에 저장
            alert(`${authResult.user.displayName}로그인 성공!`);
            return false;
          }
        }
      });
    }
    // sendPassword: function() {
    // 임시: 비밀번호 재설정하는 함수.
    //     sendPasswordResetEmail(auth, email)
    // .then(() => {
    //   // Password reset email sent!
    //   // ..
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
    // }
    // mounted: function() {
    // 임시 : 현재 로그인한 회원의 정보를 알 수 있는 함수. 존재하면 딕셔너리가, 아니면 null값.
    // auth.onAuthStateChanged((user) =>{
    //     if (user) {
    //       alert("이미 로그인 한 사용자입니다!");
    //     }
        // 현재 유저가 존재하지 않으면 로그인창을 보여주기
    //     this.initUI()
    // })
    // }
  }
}
console.log(firebaseConfig);
</script>

<style>
@import "../css/view-main.css";
</style>