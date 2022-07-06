import http from "../http-common";
class TierDataService {
  getAll() {
    return http.get("/tiers");
  }
  get(id) {
    return http.get(`/tiers/${id}`);
  }
  create(data) {
    return http.post("/tiers", data);
  }
  update(id, data) {
    return http.put(`/tiers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/tiers/${id}`);
  }
  deleteAll() {
    return http.delete(`/tiers`);
  }
  findByTitle(title) {
    return http.get(`/tiers?title=${title}`);
  }
}

export default new TierDataService();
