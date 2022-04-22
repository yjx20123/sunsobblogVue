import Vue from "vue"; 
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router/routes"
import VueRouter from "vue-router";
import leftMenu from "@/layout/left-menu";
import topHeader from "@/layout/top-header";
Vue.component("leftMenu",leftMenu)
Vue.component("topHeader",topHeader)
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(VueRouter)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
