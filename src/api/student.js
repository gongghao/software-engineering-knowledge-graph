import request from "@/utils/request";

export function getStudentList(pageNum) {
  return request({
    url: "/user/student/findAll",
    method: "get",
    params: { pageNum },
  });
}

export function getStudentById(id) {
  return request({
    url: "/user/student/findById",
    method: "get",
    params: { id },
  });
}