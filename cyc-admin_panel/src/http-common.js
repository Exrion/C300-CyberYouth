// import axios from "axios";
// var env = dev;
// console.log(env);

// var dev = {
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json",
//   },
// }

// var prod = {
//   baseURL: "https://20220724t203008-dot-c300-cyc-node.et.r.appspot.com/api",
//   headers: {
//     "Content-type": "application/json",
//   },
// }

// var conf = {
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