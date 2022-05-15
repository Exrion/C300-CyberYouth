module.exports = app => {
    const trophies = require("../controllers/trophy.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Trophy
    router.post("/", trophies.create);
  
    // Retrieve all Tutorials
    router.get("/", trophies.findAll);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", trophies.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", trophies.update);
  
    app.use('/api/trophies', router);
  };