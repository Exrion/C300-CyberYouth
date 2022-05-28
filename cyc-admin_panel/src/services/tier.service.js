// import http from "../http-common";
// class TierDataService {
//   getAll() {
//     return http.get("/tiers");
//   }
//   get(id) {
//     return http.get(`/tiers/${id}`);
//   }
//   create(data) {
//     return http.post("/tiers", data);
//   }
//   update(id, data) {
//     return http.put(`/tiers/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/tiers/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/tiers`);
//   }
//   findByTitle(title) {
//     return http.get(`/tiers?title=${title}`);
//   }
// }

// export default new TierDataService();


import http from "../http-common";
const getAll = () => {
  return http.get("/tiers");
};
const get = id => {
  return http.get(`/tiers/${id}`);
};
const create = data => {
  return http.post("/tiers", data);
};
const update = (id, data) => {
  return http.put(`/tiers/${id}`, data);
};
const remove = id => {
  return http.delete(`/tiers/${id}`);
};
const removeAll = () => {
  return http.delete(`/tiers`);
};
const findByTierName = tierName => {
  return http.get(`/tiers?title=${tierName}`);
};
const TierService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTierName
};
export default TierService;