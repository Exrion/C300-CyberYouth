module.exports = (app) => {
  const exchanges = require("../controllers/exchange.controller.js");

  var router = require("express").Router();

  // Create a new Trophy
  router.post("/", exchanges.create);

  // Retrieve all Trophies
  router.get("/", exchanges.findAll);

  // Retrieve a single Trophies with id
  router.get("/:id", exchanges.findOne);

  // Update a Trophies with id
  router.put("/:id", exchanges.update);

  app.use("/api/exchanges", router);
};