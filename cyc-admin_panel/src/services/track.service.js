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
}
export default new TrackDataService();