import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'
import vuetify from './plugins/vuetify'
let app = createApp(App)

app.use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
