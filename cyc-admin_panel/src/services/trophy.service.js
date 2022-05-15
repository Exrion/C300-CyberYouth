import http from "../http-common";
class TrophyDataService {
  getAll() {
    return http.get("/trophies");
  }
  get(id) {
    return http.get(`/trophies/${id}`);
  }
  create(data) {
    return http.post("/trophies", data);
  }
  update(id, data) {
    return http.put(`/trophies/${id}`, data);
  }
  delete(id) {
    return http.delete(`/trophies/${id}`);
  }
  deleteAll() {
    return http.delete(`/trophies`);
  }
  findByTitle(title) {
    return http.get(`/trophies?title=${title}`);
  }
}

export default new TrophyDataService();
