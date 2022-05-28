import http from "../http-common";
class ExchangeDataService {
  getAll() {
    return http.get("/exchanges");
  }
  get(id) {
    return http.get(`/exchanges/${id}`);
  }
  create(data) {
    return http.post("/exchanges", data);
  }
  update(id, data) {
    return http.put(`/exchanges/${id}`, data);
  }
}
export default new ExchangeDataService();