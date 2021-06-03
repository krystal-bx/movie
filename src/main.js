// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
axios.defaults.timeout = 500000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.baseURL = "http://3.238.198.145:8080/";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  vuetify,
  axios
});

Vue.use(VueAwesomeSwiper /* { default options with global component } */);
