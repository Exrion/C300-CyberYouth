import http from "../http-common";
class TrophyDataService {
  getAll() {
    return http.get("/trophies");
  }
  get(id) {console.log("here in trophy.service.js");
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
  findByName(trophyName) {
    return http.get(`/trophies?title=${trophyName}`);
  }
}

export default new TrophyDataService();
