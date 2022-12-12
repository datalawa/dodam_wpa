import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios";
import VueSSE from 'vue-sse'

let app = createApp(App)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$springUrl = "https://api.springnote.blog/";
app.config.globalProperties.$djangoUrl = "https://api.springnote.blog/";

app.use(router)
  .use(vuetify)
  .use(store)
  .use(VueSSE)
  .mount('#app')
