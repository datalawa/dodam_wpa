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
                      v-on:click="loginAction"
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
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/sidebar/SideBar";
import Login from './Login.vue';
import {auth} from "@/plugins/firebase";
import {useStore} from "vuex";
import {useRouter} from 'vue-router';
import {ref} from "vue";

const store = useStore()

export default {
  name: "LoginPage",
  components: {SideBar, NavigationBar},
  // data () {
  //     return {
  //       email: '',
  //       password: '',
  //     }
  //   },
  //   methods: {
  //     login () {
  //       console.log(this.email," ",this.password)
  //     }
  // },
  setup: () => {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const loginAction = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { loginAction, email, password, error }
  }
}
</script>

<style>
@import "../css/view-main.css";
</style>
