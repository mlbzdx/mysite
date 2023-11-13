import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import loading from "@/directives/loading.js";
import vLazy from "./directives/lazy";
import showMessage from "./utils/showMessage";
import "./eventBus";

// 导入全局样式
import "./styles/global.less";
Vue.prototype.$showMessage = showMessage;
Vue.config.productionTip = false;
// 自定义指令
Vue.directive("loading", loading);
Vue.directive("lazy", vLazy);

store.dispatch("setting/sendRequest");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 测试eventBus
// import eventBus from "../eventBus";

// 先监听事件并为事件提供处理函数
// const handler1 = function (data) {
//   console.log("处理函数1正在被调用", data);
// };
// const handler2 = function (data) {
//   console.log("处理函数2正在被调用", data);
// };

// window.eventBus = eventBus;
// eventBus.$on("事件1", handler1);
// eventBus.$on("事件1", handler2);
// eventBus.$on("事件2", handler1);
