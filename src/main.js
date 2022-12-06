import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'
import vuetify from './plugins/vuetify'
import getConfig from './secrets/secret'

let app = createApp(App)

app.use(router)
  .use(vuetify)
  .use(store)
  .use(getConfig)
  .mount('#app')
