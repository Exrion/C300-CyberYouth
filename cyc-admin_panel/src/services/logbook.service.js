import http from "../http-common";
const getAll = () => {
  return http.get("/logbook");
};
const create = data => {
  return http.post("/logbook", data);
};
const LogBookService = {
  getAll,
  create,
};
export default LogBookService;