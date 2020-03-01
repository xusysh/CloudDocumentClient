// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import CKEditor from "@CKEditor/ckeditor5-vue";
import store from "./store/index";
import axios from "axios";
import "handsontable/dist/handsontable.full.css";
import echarts from "echarts";
import "../node_modules/echarts/map/js/province/beijing.js"; // 引入北京地图数据

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(CKEditor);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
