// require('dotenv').config();
// import axios from "axios";
// const env = process.env.REACT_APP_ENV;
// console.log(env);

// const dev = {
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json",
//   },
// }

// const prod = {
//   baseURL: process.env.REACT_APP_URL,
//   headers: {
//     "Content-type": "application/json",
//   },
// }

// const conf = {
//   dev,
//   prod
// }

// export default axios.create(conf[env]);

import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});