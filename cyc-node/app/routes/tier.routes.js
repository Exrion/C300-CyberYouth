module.exports = app => {
    const trophies = require("../controllers/tier.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tier
    router.post("/", tier.create);
  
    // Retrieve all Tier
    router.get("/", tier.findAll);
  
    // // Retrieve a single Tier with id
    // router.get("/:id", trophies.findOne);
  
    // // Update a Tier with id
    // router.put("/:id", trophies.update);
  
    app.use('/api/tier', router);
  };