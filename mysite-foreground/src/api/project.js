import request from "@/utils/request.js";

export async function getProjects() {
  return await request.get("/api/project");
}
