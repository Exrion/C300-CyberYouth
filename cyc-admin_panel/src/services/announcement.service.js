// import http from "../http-common";
// class AnnouncementDataService {
//   getAll() {
//     return http.get("/announcements");
//   }
//   get(id) {
//     return http.get(`/announcements/${id}`);
//   }
//   create(data) {
//     return http.post("/announcements", data);
//   }
//   update(id, data) {
//     return http.put(`/announcements/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/announcements/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/announcements`);
//   }
//   findByAnnouncementTitle(announcementTitle) {
//     return http.get(`/announcements?title=${announcementTitle}`);
//   }
// }

// export default new AnnouncementDataService();

import http from "../http-common";
const getAll = () => {
  return http.get("/announcements");
};
const get = id => {
  return http.get(`/announcements/${id}`);
};
const create = data => {
  return http.post("/announcements", data);
};
const update = (id, data) => {
  return http.put(`/announcements/${id}`, data);
};
const remove = id => {
  return http.delete(`/announcements/${id}`);
};
const removeAll = () => {
  return http.delete(`/announcements`);
};
const findByExchangeName= announcementTitle => {
  return http.get(`/announcements?title=${announcementTitle}`);
};
const AnnouncementService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByExchangeName
};
export default AnnouncementService;