import { getBanners } from "@/api/banner.js";
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
        getBanners().then((res) => {
          commit("getData", res.data);
          resolve(state.data);
        });
      });
    },
  },
};
