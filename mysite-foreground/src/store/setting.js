import { getGlobalSetting } from "@/api/setting.js";
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
    sendRequest({ commit }) {
      getGlobalSetting().then((res) => {
        commit("getData", res.data);
      });
    },
  },
};
