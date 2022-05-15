module.exports = (app) => {
  const trophies = require("../controllers/trophy.controller.js");

  var router = require("express").Router();

  // Create a new Trophy
  router.post("/", trophies.create);

  // Retrieve all Trophies
  router.get("/", trophies.findAll);

  // Retrieve a single Trophies with id
  router.get("/:trophy_id", trophies.findOne);

  // Update a Trophies with id
  router.put("/:trophy_id", trophies.update);

  app.use("/api/trophies", router);
};