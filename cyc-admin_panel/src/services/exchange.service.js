// import http from "../http-common";
// class ExchangeDataService {
//   getAll() {
//     return http.get("/exchanges");
//   }
//   get(id) {
//     return http.get(`/exchanges/${id}`);
//   }
//   create(data) {
//     return http.post("/exchanges", data);
//   }
//   update(id, data) {
//     return http.put(`/exchanges/${id}`, data);
//   }
//   findByName(exchangeName) {
//     return http.get(`/exchanges?title=${exchangeName}`);
//   }
// }
// export default new ExchangeDataService();



import http from "../http-common";
const getAll = () => {
  return http.get("/exchanges");
};
const get = id => {
  return http.get(`/exchanges/${id}`);
};
const create = data => {
  return http.post("/exchanges", data);
};
const update = (id, data) => {
  return http.put(`/exchanges/${id}`, data);
};
const remove = id => {
  return http.delete(`/exchanges/${id}`);
};
const removeAll = () => {
  return http.delete(`/exchanges`);
};
const findByExchangeName= exchangeName => {
  return http.get(`/exchanges?title=${exchangeName}`);
};
const ExchangeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByExchangeName
};
export default ExchangeService;