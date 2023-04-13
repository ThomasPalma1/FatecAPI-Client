import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import "./assets/main.css";
import "./assets/select.css";
import HighchartsVue from "highcharts-vue"

axios.defaults.baseURL = 'http://localhost:8080';

Vue.use(Toast);

Vue.use(HighchartsVue);

Vue.use(PiniaVuePlugin);

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");
