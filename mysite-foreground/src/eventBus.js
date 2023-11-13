// const listeners = {};
// // listeners的数据结构为事件名，每个事件名下为该事件可能会调用的事件函数，保存在数组中。
// // listeners = {
// //   event1: [handler1],
// //   event2: [handler1, handler2],
// //   event3: [handler1, handler2,...],
// // };
// // 事件总线
// export default {
//   // 监听某一个事件
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   // 取消监听某一个事件
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   //   触发事件
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   },
// };

// 上面的所有代码在vue实例中均有配置，因此直接导出vue实例即可
import Vue from "vue";
const app = new Vue({});
/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 *
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
Vue.prototype.$bus = app;

export default app;
