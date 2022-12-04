import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers/router"
import vuetify from './plugins/vuetify'
import getConfig from './secrets/secret'

createApp(App)
    .use(router)
    .use(vuetify)
    .use(getConfig)
    .mount('#app')
