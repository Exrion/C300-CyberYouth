import http from "../http-common";
class TrackDataService {
  getAll() {
    return http.get("/tracks");
  }
  get(id) {
    return http.get(`/tracks/${id}`);
  }
  create(data) {
    return http.post("/tracks", data);
  }
  update(id, data) {
    return http.put(`/tracks/${id}`, data);
  }
  findByTitle(title) {
    return http.get(`/tracks?title=${title}`);
  }
}

export default new TrackDataService();