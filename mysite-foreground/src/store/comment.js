import { getComments, postComment } from "@/api/blog.js";
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
        getComments(
          payload.id ? payload.id : router.history.current.params.id,
          payload.page,
          payload.limit
        ).then((res) => {
          commit("getData", res.data);
          resolve(state.data);
        });
      });
    },
    modRequest({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        postComment(payload).then((res) => {
          commit("getData", res.data);
          resolve(state.data);
        });
      });
    },
  },
};
