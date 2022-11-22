<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar></SideBar>
    <div id="section-main-content">
      <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card width="530" height="600" class="elevation-12">
            <v-toolbar
              color="white"
              dark
              flat
            >
              <v-toolbar-title class="flex text-center">LOGIN</v-toolbar-title>
            </v-toolbar>

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
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="비밀번호를 입력하세요."
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  hint="최소 6자입니다."
                ></v-text-field>

                <v-btn
                  block
                  color="#7C12A6"
                  text
                  rounded
                >로그인</v-btn>
              </v-form>
            </v-card-text>

            <v-card-actions class="justify-center">
              <v-btn color="black">아이디(이메일) 찾기</v-btn> |
              <v-btn color="black">비밀번호 찾기</v-btn> |
              <v-btn color="black" @click="$router.push('/signup')">회원가입</v-btn>
              <!-- <router-link to="/signup">SignUp</router-link> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="login">
      <h3>LOGIN</h3>
      <p>로그인을 하시면 더욱 편리하게 이용하실 수 있습니다.</p>
      <input type="email" placeholder="email"><br>
      <input type="password" placeholder="password"><br>
      <button>로그인</button>
      <p>아이디(이메일) 찾기 | 비밀번호 찾기 | 회원가입</p>
    </div> -->
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  //TODO: name 변경
  name: "LoginPage",
  components: {SideBar, NavigationBar},
  data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {}
}
</script>

<style>
@import "../css/view-main.css";
</style>