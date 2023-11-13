import { getMessages, postMessage } from "@/api/message.js";
import router from "@/router";
export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    getData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    sendRequest({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        getMessages(payload.page, payload.limit).then((res) => {
          commit("getData", res.data);
          resolve(state.data);
        });
      });
    },
    modRequest({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        postMessage(payload).then((res) => {
          commit("getData", res.data);
          resolve(state.data);
        });
      });
    },
  },
};
