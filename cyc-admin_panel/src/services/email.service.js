import http from "../http-common";
const create = data => {
    return http.post("/sendmail", data);
  };
  const EmailService = {
    create,
  };
  export default EmailService;