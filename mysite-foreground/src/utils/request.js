//导入axios
import axios from "axios";
//创建请求实例
const request = axios.create();

// 添加请求拦截
//请求拦截方法传入两个回调函数，第一个回调函数的参数是请求头的配置，第二个回调函数的参数是请求发送失败后返回的错误
request.interceptors.request.use(
  function (config) {
    // 在请求被发送前做一些操作
    return config;
  },
  function (error) {
    // 在请求发送失败后做一些操作
    return Promise.reject(error);
  }
);

// 添加响应拦截
request.interceptors.response.use(
  function (response) {
    // 状态码在200的情况下会触发该函数
    // 在获取到响应数据后做一些操作
    return response.data;
  },
  function (error) {
    // 状态码在200以外的情况下触发该函数
    // 在接收响应失败后做一些操作
    return Promise.reject(error);
  }
);

export default request;
