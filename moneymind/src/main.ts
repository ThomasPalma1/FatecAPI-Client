import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import vuetify from './plugins/vuetify'

const app = createApp(App)

new Vue({
  router,
  pinia: createPinia(),
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
