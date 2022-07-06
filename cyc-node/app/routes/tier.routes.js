module.exports = app => {
    const tiers = require("../controllers/tier.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tier
    router.post("/", tiers.create);
  
    // Retrieve all Tier
    router.get("/", tiers.findAll);
  
    // // Retrieve a single Tier with id
    // router.get("/:id", trophies.findOne);
  
    // Update a Tier with id
    router.put("/:id", tiers.update);

    // Delete a Tier with id
    router.delete("/:id", tiers.delete);
  
    app.use('/api/tiers', router);
  };