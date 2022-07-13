module.exports = app => {
    const tracks = require("../controllers/track.controller.js");
    var router = require("express").Router();
    // Create a new Tier
    router.post("/", tracks.create);
    // Retrieve all Track
    router.get("/", tracks.findAll);
    // Retrieve a single Track with id
    router.get("/:id", tracks.findOne);
    // Update a Track with id
    router.put("/:id", tracks.update);
    // Delete a Tracks with id
    router.delete("/:id", tracks.delete);

    // Delete all Tracks
    // router.delete("/", tracks.deleteAll);

   

    app.use('/api/tracks', router);
  };


