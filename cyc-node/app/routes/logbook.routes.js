module.exports = (app) => {
    const logbook = require("../controllers/logbook.controller.js");
  
    var router = require("express").Router();
  
    //Create a LogBook
    router.post("/", logbook.create);
  
    app.use("/api/logbook", router);
  };