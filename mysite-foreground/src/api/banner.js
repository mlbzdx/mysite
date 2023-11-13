import request from "@/utils/request.js";

export function getBanners() {
  return request.get("/api/banner");
}
