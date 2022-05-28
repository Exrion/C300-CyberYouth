// import http from "../http-common";
// class TrackDataService {
//   getAll() {
//     return http.get("/tracks");
//   }
//   get(id) {
//     return http.get(`/tracks/${id}`);
//   }
//   create(data) {
//     return http.post("/tracks", data);
//   }
//   update(id, data) {
//     return http.put(`/tracks/${id}`, data);
//   }
//   findByTrackName(trackName) {
//     return http.get(`/tracks?trackName=${trackName}`);
//   }
// }

// export default new TrackDataService();

import http from "../http-common";
const getAll = () => {
  return http.get("/tracks");
};
const get = id => {
  return http.get(`/tracks/${id}`);
};
const create = data => {
  return http.post("/tracks", data);
};
const update = (id, data) => {
  return http.put(`/tracks/${id}`, data);
};
const remove = id => {
  return http.delete(`/tracks/${id}`);
};
const removeAll = () => {
  return http.delete(`/tracks`);
};
const findByTrackName = trackName => {
  return http.get(`/tracks?title=${trackName}`);
};
const TrackService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTrackName
};
export default TrackService;