import axios from "axios";
const env = dev;
console.log(env);

const dev = {
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
}

const prod = {
  baseURL: "https://20220724t203008-dot-c300-cyc-node.et.r.appspot.com/api",
  headers: {
    "Content-type": "application/json",
  },
}

const conf = {
  dev,
  prod
}

export default axios.create(conf[env]);

// import axios from "axios";
// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json",
//   },
// });