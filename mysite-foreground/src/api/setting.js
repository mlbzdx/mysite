import request from "@/utils/request.js";

export function getGlobalSetting() {
  return request({
    url: "/api/setting",
    method: "get",
  });
}
