module.exports = app => {
    const tutorials = require("../controllers/tracks.controller.js");
    var router = require("express").Router();
    // Retrieve all Tutorials
    router.get("/", tracks.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", tracks.findOne);
    // Update a Tutorial with id
    router.put("/:id", tracks.update);

    app.use('/api/tracks', router);
  };