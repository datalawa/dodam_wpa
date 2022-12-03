<template>
  <NavigationBar></NavigationBar>
  <div id="section-main">
    <SideBar :is-hidden="false"></SideBar>
    <div id="section-main-content">
      <!--TODO: 화면 구현은 여기에-->
      <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card width="650" height="1200" class="elevation-12">
            <v-toolbar color="white" dark flat></v-toolbar>
            <div class="pa-8">
                <h1 style="text-align: center">CREATE ACCOUNT</h1>
            <v-container grid-list-md fluid>
              <v-layout row wrap>
                <v-divider></v-divider>
              </v-layout>
            </v-container>
            <v-card-text>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-card-text class="text-center">회원가입을 하시면 더 많은 혜택을 제공받으실 수 있습니다.</v-card-text>
                <v-spacer>
                  ㅤ
                </v-spacer>
                이메일 주소
                <v-text-field
                  label="이메일 주소를 입력하세요."
                  name="login"
                  type="text"
                  hint="@ 포함하여 입력하세요."
                  color="red"
                ></v-text-field>
                인증코드 입력
                <v-text-field
                  id="code"
                  label="인증 코드를 입력하세요."
                  name="code"
                  type="code"
                  color="red"
                ></v-text-field>
                비밀번호
                <v-text-field
                  id="password"
                  label="비밀번호를 입력하세요."
                  name="password"
                  type="password"
                  color="red"
                  counter
                ></v-text-field>
                비밀번호 확인
                <v-text-field
                  id="password"
                  label="비밀번호를 다시 입력하세요."
                  name="password"
                  type="password"
                  color="red"
                  counter
                ></v-text-field>
                이름
                <v-text-field
                  id="name"
                  label="이름을 입력하세요."
                  name="name"
                  type="name"
                  color="red"
                ></v-text-field>
                연락처
                <v-text-field
                  id="phonenumber"
                  label="휴대폰 번호를 입력하세요."
                  name="phonenumber"
                  type="phonenumber"
                  color="red"
                ></v-text-field>
                생년월일
                <v-text-field
                  id="birth"
                  label="생년월일을 입력하세요."
                  name="birth"
                  type="birth"
                  color="red"
                ></v-text-field>
                동/호수
                <v-text-field
                  id="dongho"
                  label="동/호수를 입력하세요."
                  name="dongho"
                  type="dongho"
                  color="red"
                ></v-text-field>
              </v-form>
            </v-card-text>
           </div>
          </v-card>
        </v-col>
      </v-row>
     </v-container>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
export default {
  //TODO: name 변경
  name: "TempPage",
  components: {SideBar, NavigationBar},
}
</script>

<style>
@import "../css/view-main.css";
</style>