module.exports = (app) => {
  const trophies = require("../controllers/trophy.controller.js");

  var router = require("express").Router();

  // Create a new Trophy
  router.post("/", trophies.create);

  // Retrieve all Trophies
  router.get("/", trophies.findAll);

  // Retrieve a single Trophies with id
  router.get("/:id", trophies.findOne);

  // Update a Trophies with id
  router.put("/:id", trophies.update);

  // Delete a Trophies with id
  router.delete("/:id", trophies.delete);

  // Delete all Trophies
  router.delete("/", trophies.deleteAll);

  app.use("/api/trophies", router);
};