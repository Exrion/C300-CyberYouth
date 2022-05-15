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
<<<<<<< HEAD
}
export default new TrophyDataService();
=======

}
export default new TrophyDataService();
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
