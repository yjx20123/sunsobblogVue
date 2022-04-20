import Vue from "vue"; 
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router/routes"
import VueRouter from "vue-router";
import leftMenu from "@/layout/left-menu";
Vue.component("leftMenu",leftMenu)
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(VueRouter)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
