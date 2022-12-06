import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'
import vuetify from './plugins/vuetify'
import getConfig from './secrets/secret'
// import firebaseData from './plugins/firbase'

let app = createApp(App)

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

var firebaseConfig = getConfig();
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
app.config.globalProperties.$firebase = firebase
app.config.globalProperties.$auth = auth

app.use(router)
  .use(vuetify)
  .use(store)
  .use(getConfig)
  // .use(firebaseData)
  .mount('#app')
