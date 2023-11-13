import Vue from "vue";
import { Store, install } from "vuex";

if (!window.Vuex) {
  install(Vue);
}

import setting from "./setting";
import banner from "./banner";
import blogs from "./blogs";
import blog from "./blog";
import blogTypes from "./blogTypes";
import comment from "./comment";
import about from "./about";
import project from "./project";
import message from "./message";

export default new Store({
  modules: {
    setting,
    banner,
    blogs,
    blog,
    blogTypes,
    comment,
    about,
    project,
    message,
  },
  strict: true,
});
