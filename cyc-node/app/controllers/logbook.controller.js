const db = require("../models");
const LogBook = db.logbook;


// Create and Save a new LogBook Entry
exports.create = (req, res) => {
    // Validate request
    if (!req.body.modificationDetail) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
  
    const logbook = {
        editItemID: req.body.editItemID,
        modificationDetail: req.body.modificationDetail,
    };
    
    // Save LogBook in the database
    LogBook.create(logbook)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the LogBook.",
        });
    });
};