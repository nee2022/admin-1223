import Vue from "vue";
import App from "./App";
import router from "./router";
import $ from "jquery";
import axios from "axios";
import less from "less";
import "layui-src/dist/css/layui.css";
import "layui-src/dist/layui.all.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/assets/css/index.css";
import "../src/assets/css/index.styl";
import store from "./store/index";

import { Loading, Message } from "element-ui";
Vue.use(ElementUI);
Vue.use(less);
Vue.prototype.$http = axios;
// Vue.use(VueAxios, axios);
axios.defaults.baseURL = "https://www.api.sqjtjt.com";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  $,
  components: {
    App
  },
  template: "<App/>"
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  const token = localStorage.getItem("token");
  if (token) {
    next();
  } else {
    if (to.path === "/logIn") {
      next();
    } else {
      next("/logIn");
    }
  }
});

// //设置1rem = 100*(设备宽/1920)
// let htmlWidth =
//   document.documentElement.clientWidth || document.body.clientWidth;
// console.log(htmlWidth);
// //获取htmlDom
// let htmlDom = document.getElementsByTagName("html")[0];
// //设置html的font-size
// htmlDom.style.fontSize = 100*(htmlWidth / 1920) + "px";

// window.addEventListener("resize", e => {
//   let htmlWidth =
//     document.documentElement.clientWidth || document.body.clientWidth;
//   //获取htmlDom
//   let htmlDom = document.getElementsByTagName("html")[0];
//   //设置html的font-size
//   htmlDom.style.fontSize = 100*(htmlWidth / 1920) + "px";
// });

var loading = null;

axios.interceptors.request.use(
  function(config) {
    loading = Loading.service({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0,0,0,0.7)"
    });
    return config;
  },
  function(error) {
    Message(error);
    console.log("========", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    loading.close();
    // if (response.data.error == 257) {
    // 	alert("请重新登录")
    // 	router.push({
    // 		path: "/logIn"
    // 	});
    // }
    return response;
  },
  function(error) {
    Message(error);
    loading.close();
    Message.error("获取数据失败");
    console.log("========", error);
    return Promise.reject(error);
  }
);
