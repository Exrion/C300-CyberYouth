module.exports = app => {
    const announcements = require("../controllers/announcement.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Announcement
    router.post("/", announcements.create);

    // Retrieve all Announcements
    router.get("/", announcements.findAll);
  
    // Retrieve a single Announcements with id
    router.get("/:id", announcements.findOne);
  
    // Update a Announcements with id
    router.put("/:id", announcements.update);
  
    // Delete a Announcements with id
    router.delete("/:id", announcements.delete);
  
    // Delete all Announcements
    router.delete("/", announcements.deleteAll);
  
    // Delete a Announcements with id
    router.delete("/:id", announcements.delete);

    app.use('/api/announcements', router);
  };