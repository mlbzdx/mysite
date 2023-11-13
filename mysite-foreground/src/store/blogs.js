import { getBlogs } from "@/api/blog.js";
import router from "@/router";
export default {
  namespaced: true,
  state: {
    data: () => {},
    typeData: () => {},
  },
  mutations: {
    getData(state, payload) {
      state.data = payload;
    },
    getDataType(state, payload) {
      state.typeData = payload;
    },
  },
  actions: {
    sendRequest({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        getBlogs(payload.page, payload.limit, payload.categoryId).then(
          (res) => {
            commit("getData", res.data);
            resolve(state.data);
          }
        );
      });
    },
    sendDataType({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        getBlogs(payload.page, payload.limit, payload.categoryId).then(
          (res) => {
            let rows = res.data.rows.filter((item) => {
              if (item.category) {
                return (
                  item.category.id === router.history.current.params.categoryId
                );
              }
            });
            let data = {
              total: res.data.total,
              rows,
            };
            commit("getDataType", data);
            resolve(state.typeData);
          }
        );
      });
    },
  },
};
