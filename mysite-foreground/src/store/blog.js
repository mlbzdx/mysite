import { getBlog } from "@/api/blog.js";
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
    sendRequest({ state, commit }) {
      return new Promise((resolve, reject) => {
        getBlog(router.history.current.params.id).then((res) => {
          commit("getData", res.data);
          resolve(state.data);
        });
      });
    },
  },
};
