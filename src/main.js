import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'
import vuetify from './plugins/vuetify'
import getConfig from './secrets/secret'
import axios from 'axios'

const app = createApp(App)

app.use(router)
  .use(vuetify)
  .use(store)
  .use(getConfig)
  .mount('#app')
  .use(axios)
  .prototype.$axios = axios // axios를 root 전역으로 사용하기 위해 추가
