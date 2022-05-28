module.exports = app => {
    const announcements = require("../controllers/announcement.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Announcement
    router.post("/", announcements.create);
  
    // Retrieve all Announcement
    router.get("/", announcements.findAll);
  
    // // Retrieve a single Announcement with id
    // router.get("/:id", announcements.findOne);
  
    // // Update a Announcement with id
    // router.put("/:id", announcements.update);
  
    // Delete a Announcements with id
    router.delete("/:id", announcements.delete);

    app.use('/api/announcements', router);
  };