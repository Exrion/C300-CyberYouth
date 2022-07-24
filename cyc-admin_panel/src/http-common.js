import axios from "axios";

const URL = "";

if (process.env.ENV == "dev") {
  URL = "http://localhost:8080/api";
} else if (process.env.ENV == "prod") {
  URL = process.env.URL;
}

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
  },
});
